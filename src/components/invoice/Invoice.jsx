import React from 'react'
import './Invoice.css'


const Invoice = () => {
  return (
    <div className='generate-invoice-wrapper'>
      <div className='logo-wrapper'>
        <div className="invoice">
          <h1>INVOICE</h1>
          <p className="number">#002121</p>
        </div>
        <div className="logo-image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="details-billto">
        <div className="details">
          <h3>Musemind</h3>
          <p>3 Raliat Kolejo street, ikorodu</p>
        </div>
        <div className="bill-to-wrapper">
          <h3>Musemind</h3>
          <p>3 Raliat Kolejo street, ikorodu</p>
        </div>
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
          <tr>
            <td>Website development </td>
            <td>2000</td>
            <td>1</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Website development </td>
            <td>2000</td>
            <td>1</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Website development </td>
            <td>2000</td>
            <td>1</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Website development </td>
            <td>2000</td>
            <td>1</td>
            <td>100000</td>
          </tr>
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
          <p>$50,000.00</p>
          <p>-</p>
          <p>-</p>
          <p className='total-amount-figure'>$50,000.0</p>
        </div>
      </div>
      <div className="footer-details">
        <div className="invoice-details-footer">
          <p className="details-footer">Invoice Details</p>
          <p className="date-issued">Date Issued: 12/04/2024 </p>
          <p className="due-date">Due Date: 12/04/2024 </p>
        </div>
        <div className="summary-amount">
          <p className="total-amount-word">Total Amount</p>
          <h2 className="total-amount-footer">$48,5000.00</h2>
        </div>
      </div>
    </div>
  )
}

export default Invoice