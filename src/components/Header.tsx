import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo-NH.png'; // Correct path to the logo

const Header: React.FC = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <img src={logo} alt="NH Logo" style={{ height: '50px' }} />
            <h1 style={{ margin: 0 }}>NHShop</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ marginRight: '20px' }}><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
