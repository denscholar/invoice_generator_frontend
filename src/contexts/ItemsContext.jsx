import { createContext } from "react";
import React, { useState } from 'react'

export const InputItemContext = createContext()

export const InputItemProvider = ({ children }) => {
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
    return <InputItemContext.Provider value={{ addRow, deleteRow, invoice }}>
        {children}
    </InputItemContext.Provider>
} 