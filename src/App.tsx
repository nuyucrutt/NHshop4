import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="layout">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="product-list">
                    <Switch>
                        <Route path="/" exact component={ProductList} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
