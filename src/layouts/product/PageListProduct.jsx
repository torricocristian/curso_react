
import {useState,useEffect} from 'react'
import axios from '../../api/Axios';
import { Product } from '../../components/Product';
import Title from '../../components/Title';
import '../../assets/styles/pages/PageListProduct.scss'
import {useParams} from 'react-router-dom';


const PageListProduct = () => {
  const [products, setProducts] = useState([]);
  let { network } = useParams();

  useEffect(()=>{

      axios.get(`/products`,
      {
          params: {
              'network': network
          }
      })
      .then(response => {
          setProducts(response.data)
      }).catch(e => {
          console.log(e);
      })

  },[]);


  return (
      <main>
          <section className='featured-products'>
              <div className="container">
                  <h2>
                      <Title title="Listado de productos" type="primary"/>         
                  </h2>
                  <div className="row">
                      {
                          products.map(product => <Product key={product.id} product={product}></Product>)
                      }
                  </div>
              </div>
          </section>
      </main>
        
  )
}

export default PageListProduct