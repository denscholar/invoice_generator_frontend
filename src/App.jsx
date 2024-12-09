import React, { useContext } from 'react'
import NavBar from './components/navBar/NavBar'
import InvoiceWrapper from './components/invoiceWrapper/InvoiceWrapper'
import Form from './components/form/Form'
import Invoice from './components/invoice/Invoice'



const App = () => {
  return (
    <div>
      <NavBar />
      <InvoiceWrapper>
        <Form />
        <Invoice />
      </InvoiceWrapper>
    </div>
  )
}

export default App