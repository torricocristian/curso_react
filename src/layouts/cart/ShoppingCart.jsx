import { useCart } from '../../hooks/useCart';
import ItemsCount from '../../components/ItemsCount';
import { useParams, Link } from 'react-router-dom';
import '../../assets/styles/fonts/riode.scss';
import '../../assets/styles/pages/PageCart.scss';
import '../../assets/styles/alert.scss';
import placeholder from '../../assets/images/placeholder.jpg';
import '../../assets/styles/btn.scss';
import { useState,useEffect } from 'react';
import axios from '../../api/Axios';


const ShoppingCart = () => {

  const { increase, decrease, removeProduct, cartItems, itemCount, total } = useCart();
  const [whatsapp, setWhatsapp ] = useState('')
  const { network } = useParams();

  useEffect(()=>{
      axios.get(`/home/socials`,
      {
          params: {
              'network': network
          }
      })
      .then(response => {
          setWhatsapp(response.data.whatsapp)
      }).catch(e => {
          console.log(e);
      })
  },[]);

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

  function sendOrder(){

    var text = "";
        text += "*DESCRIPCIÓN DEL PEDIDO* \n\n";

        cartItems.forEach(product => {
          text += `*${product.title}* \n`;
          text += `Cantidad: ${product.quantity} \n`;
          text += `Precio: $${product.price * product.quantity} \n\n`;
        });
        

        text += "*TOTAL: $" + total + "*" ;

    window.open("https://wa.me/5411" + whatsapp + "?text=" + encodeURIComponent(text), '_blank');  
  }

  return (
    <main id="ShoppingCart">
      <section className="shop-table">
        <div className="container">
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
                    {
                      item.image ? <img src={item.image} alt={item.title} /> : <img src={placeholder} alt={item.title} />
                    }
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


          {
            cartItems.length === 0 && <div className="alert alert__warning">No hay productos en el carrito. <Link to={`/${network}/productos`}>Añadir productos</Link></div>
          }


            {
              cartItems.length > 0 &&
                <button 
                onClick={sendOrder}
                className="btn btn-primary">
                  <i className='d-icon-truck'></i>Realizar pedido
                </button>
            }
    
        </div>
      </section> 
    </main>
  )
}
export default ShoppingCart