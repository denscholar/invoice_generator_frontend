import React from 'react'
import './Button.css'

const Button = ({type, className, name}) => {
  return (
    <div className='reusable-button'><button type={type} className={className}>{name}</button></div>
  )
}

export default Button