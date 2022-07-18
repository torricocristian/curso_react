import {useState,useEffect} from 'react'
import axios from '../../api/Axios';
import { Product } from '../../components/Product';
import Title from '../../components/Title';
import '../../assets/styles/slider.scss'
import '../../assets/styles/pages/home.scss'
import {useParams} from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import '../../../node_modules/swiper/swiper.scss';

SwiperCore.use([Pagination]);

const Home = () => {
    const [products, setProducts] = useState([]);
    const [imagesHero, setImagesHero] = useState([]);
    let { network } = useParams();

    useEffect(()=>{

        //Get products featured from API
        axios.get(`/products`,
        {
            params: {
                'network': network,
                'featured': 'true'
            }
        })
        .then(response => {
            setProducts(response.data)
        }).catch(e => {
            console.log(e);
        })

        //Get banner from API
        axios.get(`/home/banner`,
        {
            params: {
                'network': network
            }
        })
        .then(response => {
            setImagesHero(response.data)
        }).catch(e => {
            console.log(e);
        })

    },[]);


    return (
        <main>

            <section id="hero">
                <div className="container">
                <Swiper
                    id="main"
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    className="slider slider__primary"
                >
                    {imagesHero.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img
                                src={image.image}
                                alt={image.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </section>

            <section className='featured-products'>
                <div className="container">
                    <h2>
                        <Title title="Productos Destacados" type="primary"/>         
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

export default Home