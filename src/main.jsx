import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InputItemProvider } from './contexts/ItemsContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputItemProvider>
      <App />
    </InputItemProvider>
  </StrictMode>,
)
