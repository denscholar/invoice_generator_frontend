import { createContext } from "react";
import React, { useState } from 'react'

export const InputItemContext = createContext()

export const InputItemProvider = ({ children }) => {
    const [rows, setRows] = useState([
        { id: 1, item: '', rate: '', qty: '', amount: '' },
        { id: 2, item: '', rate: '', qty: '', amount: '' },

    ]);

    const addRow = () => {
        const newRow = {
            id: Date.now(),
            item: '',
            rate: '',
            qty: '',
            amount: '',
        };
        setRows([...rows, newRow]);
    };

    // Delete a row
    const deleteRow = (id) => {
        setRows(rows.filter((row) => row.id !== id));
    };
    return <InputItemContext.Provider value={{ addRow, deleteRow, rows }}>
        {children}
    </InputItemContext.Provider>
} 