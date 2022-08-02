
import {useState,useEffect} from 'react'
import { Product } from '../../components/Product';
import Title from '../../components/Title';
import '../../assets/styles/pages/PageListProduct.scss'
import {useParams} from 'react-router-dom';

import { getFirestore, collection, getDocs, where, query, limit } from 'firebase/firestore';


const PageListProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('0');
  let { network } = useParams();

  useEffect(()=>{

    const db = getFirestore();
    getDocs(collection(db, 'items')).then((snapshot) => {
        console.log(snapshot.docs)
        const dataExtraida = snapshot.docs.map(datos => datos.data()) 
        setProducts(dataExtraida)
    }) 
    
  },[]);


  const fetchData = () => {
    const db = getFirestore();

    if(category == '0'){
        var q = query(
            collection(db, 'items'),
        );
    }else{
        var q = query(
            collection(db, 'items'),
            where('category', '==', category)
        );
    }

    getDocs(q).then((snapshot) => {
        const dataExtraida = snapshot.docs.map(datos => datos.data()) 
        setProducts(dataExtraida)
    }) 
  };



  useEffect(() => {
    fetchData();
  }, [category]) 

  return (
      <main>
          <section className='featured-products'>
              <div className="container">

                    <select name="categories" id="categories" value={category} onChange={
                        (e) => {
                            setCategory(e.target.value);
                        }
                    }>
                        <option value="0">Todos</option>
                        <option value="Remeras">Remeras</option>
                        <option value="Zapatillas">Zapatillas</option>
                    </select> 

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