import { useState } from 'react'

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
}

export const useCart = () => {
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

    return { cart, addToCart, removeFromCart }
}