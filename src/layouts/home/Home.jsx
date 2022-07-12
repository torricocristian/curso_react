import {useState,useEffect} from 'react'
import axios from '../../api/Axios';
import { Product } from '../../components/Product';
import Title from '../../components/Title';
import '../../assets/styles/home.scss'
import {useParams} from 'react-router-dom';


const Home = () => {
    const [products, setProducts] = useState([]);

    let { network } = useParams();
    console.log(network, 'network');


    useEffect(()=>{

        axios.get(`/products`)
        .then(response => {
            setProducts(response.data)
        }).catch(e => {
            console.log(e);
        })

    },[]);


    return (
        <>
            <section className='featured-products'>
                <div className="container">
                    <h2>
                        <Title title="Destacados" type="primary"/>         
                    </h2>
                    <div className="row">
                        {
                            products.map(product => <Product key={product.id} product={product}></Product>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home