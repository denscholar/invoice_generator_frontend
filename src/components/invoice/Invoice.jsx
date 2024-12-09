import React, { useContext } from 'react'
import './Invoice.css'
import { InputItemContext } from '../../contexts/ItemsContext'

const Invoice = () => {
  const { invoice, total } = useContext(InputItemContext)

  return (
    <div className='generate-invoice-wrapper'>
      <div className='logo-wrapper'>
        <div className="invoice">
          <h1>INVOICE</h1>
          <p className="number">{invoice.invoiceNum}</p>
        </div>
        <div className="logo-image">
          <img src={invoice.logo.name} alt="logo" />
        </div>
      </div>
      <div className="details-billto">
        {invoice.companyDetails && (<div className="details">
          {/* <h3>Musemind</h3> */}
          <p>{invoice.companyDetails}</p>
        </div>)}
        {invoice.billTo && (<div className="bill-to-wrapper">
          {/* <h3>Musemind</h3> */}
          <p>{invoice.billTo}</p>
        </div>)}
      </div>

      {/* table */}
      <table>
        <thead>
          <tr>
            <th scope="col">Deliverable</th>
            <th scope="col">Rate</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.rows.map((row) => (
          <tr key={row.id}>
            <td>{row.item}</td>
            <td>{row.rate}</td>
            <td>{row.qty}</td>
            <td>{row.amount}</td>
          </tr>
          ))}
    
        </tbody>
      </table>
      <div className="total">
        <div className="sub-total">
          <p>SubTotal</p>
          <p>Tax</p>
          <p>Discount</p>
          <p className='total-amount'>Total</p>
        </div>
        <div className="sub-total-amount">
          <p>${total}</p>
          <p>-</p>
          <p>-</p>
          <p className='total-amount-figure'>${total}</p>
        </div>
      </div>
      <div className="footer-details">
        <div className="invoice-details-footer">
          <p className="details-footer">Invoice Details</p>
          <p className="date-issued">Date Issued: {invoice.dateIssued} </p>
          <p className="due-date">Due Date: {invoice.dueDate} </p>
        </div>
        <div className="summary-amount">
          <p className="total-amount-word">Total Amount</p>
          <h2 className="total-amount-footer">${total}</h2>
        </div>
      </div>
    </div>
  )
}

export default Invoice