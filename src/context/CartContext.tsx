import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
    removeFromCart: (id: number) => void; // New function
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
