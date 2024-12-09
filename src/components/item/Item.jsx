import React from 'react'
import './Item.css'

const Item = ({type, style, onChange, value, readOnly}) => {
  return (
    <div className='item-input'>
        <input style={style} value={value} type={type} onChange={onChange} readOnly={readOnly} />
    </div>
  )
}

export default Item