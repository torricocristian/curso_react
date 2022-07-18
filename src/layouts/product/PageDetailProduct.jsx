import {useState,useEffect} from 'react';
import axios from '../../api/Axios';
import {useParams} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import '../../assets/styles/pages/pageProduct.scss';
import '../../assets/styles/btn.scss';
import '../../assets/styles/fonts/riode.scss';
import ItemsCount from '../../components/ItemsCount';


const PageDetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  let { network, slugProduct } = useParams();

  useEffect(()=>{

    axios.get(`/product/${slugProduct}`,
    {
        params: {
            'network': network
        }
    })
    .then(response => {
        setProduct(response.data)

        setImages(
          response.data.gallery.map(image => 
            (
              {
                original: image,
                thumbnail: image,
              }
            )
          )
        )

    }).catch(e => {
        console.log(e);
    })

},[]);

  return (
    <main id="PageDetailProduct">
        <section className="product-single">
          <div className="container">
              <div className="media">
                <ImageGallery 
                  items={images} 
                  thumbnailPosition="left"
                  showPlayButton={false}
                  disableThumbnailScroll={true}
                  lazyLoad={true}
                />
              </div>
              <div className="data">
                <h1 className='title__primary'>{product.title}</h1>
                <div className="meta">
                  {product.sku && <span className="sku">SKU: {product.sku}</span>}
                  {product.category && <span className="category">Categoría: {product.category}</span>}
                </div>
                <div className="price">
                  ${product.price}
                </div>
                <div 
                  className="description" 
                  dangerouslySetInnerHTML={{ __html: product.description }}></div>

                  <div className="add-to-cart">
                    <ItemsCount/>
                    <button className="btn btn-primary">
                      <i className='d-icon-bag'></i>Agregar al carrito
                    </button>
                  </div>
              </div>
          </div>
        </section>
    </main>
  )
}

export default PageDetailProduct