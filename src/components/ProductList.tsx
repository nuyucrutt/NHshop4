import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import { useCart } from '../context/CartContext';

interface ProductType {
    id: number;
    name: string;
    price: number;
    images: string[]; // Change to an array of strings
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data: ProductType[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product: ProductType) => {
        addToCart(product);
        console.log('Added to cart:', product);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
