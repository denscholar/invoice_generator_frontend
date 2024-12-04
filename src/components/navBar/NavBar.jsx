import React from 'react'
import InvoiceLogo from '/invoice.png'
import './NavBar.css'
import Button from '../button/Button'
const NavBar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className="logo">
        <img src={InvoiceLogo} alt="logo" />
        <p>Electronic Invoice</p>
      </div>
      <div className="tab-wrapper">
        <Button name="Generate Invoice" type='button' />
        <Button name="download Invoice" className="download-button" type='button' />
      </div>
    </nav>
  )
}

export default NavBar