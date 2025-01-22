import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider> {/* Wrap App with CartProvider */}
                <App />
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);
