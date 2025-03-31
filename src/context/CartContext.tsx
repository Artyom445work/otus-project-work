import React, { createContext, useState, useContext } from 'react'

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (product: any) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: any) => {
        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}