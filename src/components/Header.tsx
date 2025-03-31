import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Online Store App</h1>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}