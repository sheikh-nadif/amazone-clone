import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, rating, seller, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Only <span className='stock'>{stock}</span> left in stock - Order Now</p>
                <h3>{price} $</h3>
            </div>
        </div>
    );
};

export default Product;