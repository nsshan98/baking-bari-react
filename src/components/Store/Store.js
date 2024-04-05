import React, { useEffect, useState } from 'react';
import './Store.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Store = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

    const addToCartHandler = (product) => {
        console.log(product)
        const cartAdded = [...cart, product]
        setCart(cartAdded)
    }
    return (
        <div className='store-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCartHandler={addToCartHandler}>
                    </Product>
                    )
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Store;