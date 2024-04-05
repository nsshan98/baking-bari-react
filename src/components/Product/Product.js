import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img} = props.product
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>$ {price}</p>
            <button onClick={() => props.addToCartHandler(props.product)}>Add to Cart</button>
        </div>
        
    );
};

export default Product;