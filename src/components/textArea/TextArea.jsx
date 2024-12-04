import React from 'react'
import './TextArea.css'

const TextArea = ({ label, name }) => {
    return (
        <div className='text_area'>
            <label htmlFor={name}>{label}</label><br />
            <textarea name={name} id=""></textarea>
        </div>
    )
}

export default TextArea