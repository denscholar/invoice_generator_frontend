import React, { useContext, useState } from 'react'
import './Form.css'
import { InputItemContext } from '../../contexts/ItemsContext'
import Input from '../input/Input'
import TextArea from '../textArea/TextArea'
import Item from '../item/Item'
import Button from '../button/Button'

const Form = () => {

  const { addRow, deleteRow, invoice } = useContext(InputItemContext)
  console.log(invoice);
  
  return (
    <>
      <form action="" className='form-container'>
        <div className="upper-region">
          <div className='invoice-details'>
            <div className='invoice-detail-wrapper'>
              <Input label="Logo" type='file' />
              <TextArea className="bill-tor" name="" label="Your company detail" />
              <Input label="Date issued" type='date' name="dateIssue" />
            </div>
            <div className='invoice-detail-wrapper'>
              <Input className="invoice-number" label="Invoice number" type='text' name="dateIssue" />
              <TextArea className="bill-tor" name="" label="Bill to" />
              <Input className="due-date" label="Due date" type='date' name="dueDate" />
            </div>
          </div>
        </div>
        <div>
          <div className="down-region">
            <div className="heading" style={{ display: "flex", justifyContent: "space-between" }}>
              <h5 >Item</h5>
              <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginRight: "30px" }}>
                <h5>Rate</h5>
                <h5>Qty</h5>
                <h5>Amount</h5>
              </div>
            </div>
            {invoice.rows.map((row) => (
              <div style={{ display: "flex", gap: "10px" }}key={row.id}>
                <Item type="text" style={{ width: '280px' }} />
                <Item type="number" style={{ width: '70px' }} />
                <Item type="number" style={{ width: '70px' }} />
                <Item type="number" style={{ width: '70px' }} />
                <button onClick={() => deleteRow(row.id)} className='delete-button'>&times;</button>
              </div>
            ))}
            <div className='add-button' >
              <button type='button' onClick={addRow}>+</button>
              <p>Add Item</p>
            </div>
          </div>
        </div>
        <Button className='generate-invoice-button' type='submit' name='Create Invoice' />
      </form>
    </>
  )
}

export default Form