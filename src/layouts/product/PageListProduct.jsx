
import {useState,useEffect} from 'react'
import { Product } from '../../components/Product';
import Title from '../../components/Title';
import '../../assets/styles/pages/PageListProduct.scss'
import {useParams} from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const PageListProduct = () => {
  const [products, setProducts] = useState([]);
  let { network } = useParams();

  useEffect(()=>{

    const db = getFirestore();
    getDocs(collection(db, 'items')).then((snapshot) => {
        console.log(snapshot.docs)
        const dataExtraida = snapshot.docs.map(datos => datos.data()) 
        setProducts(dataExtraida)
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