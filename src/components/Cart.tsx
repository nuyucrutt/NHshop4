import React from 'react';
import { useCart } from '../context/CartContext';
import Header from './Header'; // Import the Header component

const Cart: React.FC = () => {
    const { cart, clearCart, removeFromCart } = useCart();

    const handleRemoveAll = () => {
        clearCart();
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        // Implement checkout logic here
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <Header /> {}
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={handleRemoveAll}>Remove All</button>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
