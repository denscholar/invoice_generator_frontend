import React from 'react'
import './InvoiceWrapper.css'

const InvoiceWrapper = ({children}) => {
  return (
    <div className='invoice-wrapper'>{children}</div>
  )
}

export default InvoiceWrapper