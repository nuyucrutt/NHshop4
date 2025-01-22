import React from 'react';

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        images: string[]; // Ensure this is an array of strings
    };
    onAddToCart: (product: { id: number; name: string; price: number; images: string[] }) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
    const imageUrl = product.images[0] || 'fallback-image-url.jpg';
    console.log('Image URL:', imageUrl); // Log the image URL
    console.log('Product Data:', product); // Log the entire product data

    return (
        <div className="product">
            <img 
                src={imageUrl} 
                alt={product.name} 
                onError={(e) => { e.currentTarget.src = 'fallback-image-url.jpg'; }} // Fallback image
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
