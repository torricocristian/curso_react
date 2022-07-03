
import '../assets/styles/product.scss';

export const Product = (props) => {
    const{title, image, price, category} = props.product;

    return (
        <a href="/" className="product">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="data">
                <span className="category">{category}</span>
                <h3>{title}</h3>
                <span className="price">${price}</span>
            </div>
        </a>
    )
}
