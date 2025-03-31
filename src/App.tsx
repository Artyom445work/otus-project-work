import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'

export const App: React.FC = () => {
    return (
        <CartProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    )
}