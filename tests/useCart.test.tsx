import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import { useCart } from '../src/hooks/useCart'

describe('useCart', () => {
    it('adds a product to the cart', () => {
        const { result } = renderHook(() => useCart())
        const product = { id: 1, name: 'Laptop', price: 999.99 }

        act(() => {
            result.current.addToCart(product)
        })

        expect(result.current.cart).toEqual([{ ...product, quantity: 1 }])
    })

    it('increments quantity when adding the same product', () => {
        const { result } = renderHook(() => useCart())
        const product = { id: 1, name: 'Laptop', price: 999.99 }

        act(() => {
            result.current.addToCart(product)
            result.current.addToCart(product)
        })

        expect(result.current.cart).toEqual([{ ...product, quantity: 1 }])
    })

    it('removes a product from the cart', () => {
        const { result } = renderHook(() => useCart())
        const product = { id: 1, name: 'Laptop', price: 999.99 }

        act(() => {
            result.current.addToCart(product)
            result.current.removeFromCart(1)
        })

        expect(result.current.cart).toEqual([])
    })
})