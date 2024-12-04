import React from 'react'
import NavBar from './components/navBar/NavBar'
import InvoiceWrapper from './components/invoiceWrapper/InvoiceWrapper'
import Form from './components/form/Form'
import Invoice from './components/invoice/Invoice'
import { InputItemProvider } from './contexts/ItemsContext'

const App = () => {
  return (
    <div>
      <NavBar />
      <InvoiceWrapper>
        <InputItemProvider>
          <Form />
        </InputItemProvider>
        <Invoice />
      </InvoiceWrapper>
    </div>
  )
}

export default App