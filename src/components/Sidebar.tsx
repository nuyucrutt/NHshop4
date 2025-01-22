import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
}

const Sidebar: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products/?title=Generic');
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

const filteredProducts = products.filter(product => 
    product.name && product.name.toLowerCase().includes(filter.toLowerCase())
);


    return (
        <div className="sidebar">
            <h2>Product List</h2>
            <input 
                type="text" 
                placeholder="Filter by name" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
