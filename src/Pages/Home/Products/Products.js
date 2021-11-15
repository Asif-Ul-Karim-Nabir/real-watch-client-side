import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://peaceful-journey-32516.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{backgroundColor:'#F6F6F6',paddingBottom:'20px'}}>
            <h1 style={{margin:'0',paddingTop:'15px',paddingBottom:'25px'}}>Our Products</h1>
             <div className="products-container">
                {
                    products.map(product=><Product
                    key={product.name}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;