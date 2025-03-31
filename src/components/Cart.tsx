import React from 'react'

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartProps {
    cart: CartItem[]
    onRemoveFromCart: (id: number) => void
}

export const Cart: React.FC<CartProps> = ({ cart, onRemoveFromCart }) => {
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
                            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    )
}