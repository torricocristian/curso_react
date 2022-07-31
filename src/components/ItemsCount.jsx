
import '../assets/styles/itemsCount.scss'

const ItemsCount = (props) => {
    const { product , handlerQuantity } = props;
    product.quantity = typeof(product.quantity) !== 'undefined' ? product.quantity : 1;
    

    return (
        <div className='ItemsCount'>
            <span className="less" onClick={()=>{props.handlerQuantity(product.quantity - 1, product)}}>-</span>
            <div className={'input input__ItemsCount'}>
                <input
                type="text"
                value={
                    product.quantity
                } 
                readOnly
                />
            </div>
            <span className='plus' onClick={()=>{handlerQuantity(product.quantity + 1 , product)}}>+</span>

        </div>
    )
}

export default ItemsCount