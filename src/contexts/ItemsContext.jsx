import { createContext, useEffect } from "react";
import React, { useState } from 'react'


export const InputItemContext = createContext()

export const InputItemProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [invoice, setInvoice] = useState(
        {
            logo: "",
            invoiceNum: "",
            companyDetails: "",
            billTo: "",
            dateIssued: "",
            dueDate: "",
            rows: [
                { id: 1, item: '', rate: '', qty: '', amount: '' },
                { id: 2, item: '', rate: '', qty: '', amount: '' },

            ]
        }
    );

    // update the row
    const updateRow = (id, field, value) => {
        setInvoice((prevInvoice) => ({
            ...prevInvoice,
            rows: prevInvoice.rows.map((row) =>
                row.id === id ? { ...row, [field]: value, amount: field === "rate" || field === "qty" ? (field === "rate" ? value : row.rate || 0) * (field === "qty" ? value : row.qty || 0) : row.amount } : row
            ),
        }));
    };
    // update invoice
    const createInvoice = (field, value) => {
        setInvoice((prevInvoice) => ({
            ...prevInvoice,
            [field]: value,
        }));
    };

    const addRow = () => {
        const newRow = {
            id: Date.now(),
            item: '',
            rate: '',
            qty: '',
            amount: '',
        };
        setInvoice((prevInvoice) => ({
            ...prevInvoice,
            rows: [...prevInvoice.rows, newRow],
        }));
    };

    // Delete a row
    const deleteRow = (id) => {
        setInvoice((prevRow) => ({
            ...prevRow, rows: prevRow.rows.filter((row) => row.id !== id)
        }));
    };

    // Automatically calculate the total whenever rows change
    useEffect(() => {
        const newTotal = invoice.rows.reduce((sum, row) => sum + row.amount, 0);
        setTotal(newTotal);
    }, [invoice.rows]);


    return <InputItemContext.Provider value={{ addRow, deleteRow, invoice, updateRow, createInvoice, total }}>
        {children}
    </InputItemContext.Provider>
}


