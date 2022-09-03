import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>This is order {products.length}</h2>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;