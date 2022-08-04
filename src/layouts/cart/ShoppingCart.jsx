import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import ItemsCount from '../../components/ItemsCount';
import { useParams, Link } from 'react-router-dom';
import '../../assets/styles/fonts/riode.scss';
import '../../assets/styles/pages/PageCart.scss';
import '../../assets/styles/alert.scss';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const ShoppingCart = () => {

  const { increase, decrease, removeProduct, cartItems, total} = useCart();
  const { network } = useParams();
  const [success, setSuccess] = useState(false);

  const order = {
    buyer:{
      name: 'Cristian',
      email: 'cristian@info.com',
      phone: '223222',
      address: 'Calle falsa 123'
    },
    items: cartItems.map(item => ({title: item.title, price: item.price, quantity: item.quantity})),
    total: total
  }

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
    .then(({ id }) => id && setSuccess(true))
  }

  function handlerQuantity(newQuantity, product) {
    if( newQuantity > product.quantity && newQuantity <= product.stock ){
      increase(product);
    }
    else if( newQuantity < product.quantity && newQuantity > 0 ){
      decrease(product);
    }
  }

  function removeItem(product) {
    removeProduct(product);
  }


  return (
    <main id="ShoppingCart">
      <section className="shop-table">
        <div className="container">

          {
            cartItems.length === 0 && <div className="alert alert__warning">No hay productos en el carrito. <Link to={`/${network}/productos`}>Añadir productos</Link></div>
          }

          {
            cartItems.length > 0 &&
            <div className="row header">
              <div className="column product">
                Producto
              </div>
              <div className="column price">
                price
              </div>
              <div className="column quantity">
                Cantidad
              </div>
              <div className="column subtotal">
                Subtotal
              </div>
            </div>
          }
          {
            cartItems.length > 0 && cartItems.map(item => 
              <div className="row" key={item.id}>
                <span className='deleteItem' onClick={() => removeItem(item)}>
                  <i className="d-icon-times-circle"></i>
                </span>
                <Link to={'/' + network + '/productos/' + item.slug} className="column product">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <span className="name">
                    {item.title}
                  </span>
                </Link>
                <div className="column price">
                  ${item.price}
                </div>
                <div className="column quantity">
                  <ItemsCount product={item} handlerQuantity={handlerQuantity}/>
                </div>
                <div className="column subtotal">
                  ${item.price * item.quantity}
                </div>
              </div>
            ) 
          } 
    
        </div>
      </section> 


      <section className='cta'>
          <div className="container">
            <button className="btn btn-primary" onClick={()=>handleClick()}>
              Enviar productos
            </button>

            {   
              success && <div className="alert alert__warning">¡Pedido realizado!</div>
            }
          </div>
      </section>
    </main>
  )
}
export default ShoppingCart