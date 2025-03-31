import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Online Store App</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    )
}