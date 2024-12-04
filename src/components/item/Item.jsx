import React from 'react'
import './Item.css'

const Item = ({type, style}) => {
  return (
    <div className='item-input'>
        <input style={style} type={type} />
    </div>
  )
}

export default Item