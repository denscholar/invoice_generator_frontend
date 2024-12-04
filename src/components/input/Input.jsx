import React from 'react'
import './Input.css'

const Input = ({ label, placeholder, type, name }) => {
    return (
        <div className='input-field'>
            <label htmlFor={name}></label>{label}<br />
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default Input