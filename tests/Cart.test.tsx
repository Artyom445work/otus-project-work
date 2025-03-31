import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import { Cart } from '../src/components/Cart'

const mockCart = [
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Smartphone', price: 499.99, quantity: 2 },
]

const mockRemoveFromCart = jest.fn()

describe('Cart', () => {
    it('renders cart items correctly', () => {
        render(<Cart cart={mockCart} onRemoveFromCart={mockRemoveFromCart} />)
        expect(screen.getByText('Laptop x1 - $999.99')).toBeInTheDocument()
        expect(screen.getByText('Smartphone x2 - $499.99')).toBeInTheDocument()
        expect(screen.getByText('Total: $1999.97')).toBeInTheDocument()
    })

    it('calls onRemoveFromCart when "Remove" button is clicked', () => {
        render(<Cart cart={mockCart} onRemoveFromCart={mockRemoveFromCart} />)
        const removeButton = screen.getAllByText('Remove')[0]
        fireEvent.click(removeButton)
        expect(mockRemoveFromCart).toHaveBeenCalledWith(1)
    })

    it('displays "Your cart is empty" when cart is empty', () => {
        render(<Cart cart={[]} onRemoveFromCart={mockRemoveFromCart} />)
        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
    })
})