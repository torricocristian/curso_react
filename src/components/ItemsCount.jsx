import React, {useState, useEffect} from 'react'
import '../assets/styles/itemsCount.scss'

const ItemsCount = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(10);
    const [error, setError] = useState(false);


    function handlerQuantity(newQuantity) {

        if (newQuantity < stock && newQuantity > 0) {
            setError(false);
            setQuantity(newQuantity);
        }else{
            setError(true);
        }
        
    }

    return (
        <div className='ItemsCount'>
            <span className="less" onClick={()=>{handlerQuantity(quantity - 1)}}>-</span>
            <div className={'input input__ItemsCount'}>
                <input
                type="text"
                value={quantity} 
                readOnly
                />
            </div>
            <span className='plus' onClick={()=>{handlerQuantity(quantity + 1)}}>+</span>

            {
                error && <span className='error'>Solo acepta valores entre 1 y 9</span>
            }
        </div>

        
    )
}

export default ItemsCount