import React from 'react'
import { useCart } from '../hooks/useCart'

export const Cart: React.FC = () => {
    const { cart, removeFromCart } = useCart()

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
              <span>
                {item.name} x{item.quantity} - ${item.price.toFixed(2)}
              </span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    )
}