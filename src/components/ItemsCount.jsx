import React, {useState, useEffect} from 'react'
import '../assets/styles/itemsCount.scss'

const ItemsCount = (props) => {
    return (
        <div className='ItemsCount'>
            <span className="less" onClick={()=>{props.handlerQuantity(props.quantity - 1)}}>-</span>
            <div className={'input input__ItemsCount'}>
                <input
                type="text"
                value={props.quantity} 
                readOnly
                />
            </div>
            <span className='plus' onClick={()=>{props.handlerQuantity(props.quantity + 1)}}>+</span>

        </div>
    )
}

export default ItemsCount