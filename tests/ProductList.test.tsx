import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import { ProductList } from '../src/components/ProductList'

const mockProducts = [
    { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Smartphone', price: 499.99, image: 'https://via.placeholder.com/150' },
]

const mockOnAddToCart = jest.fn()
const mockOnDelete = jest.fn()

describe('ProductList', () => {
    it('renders all products', () => {
        render(
            <ProductList products={mockProducts} onAddToCart={mockOnAddToCart} onDelete={mockOnDelete} />
        )
        expect(screen.getByText('Laptop')).toBeInTheDocument()
        expect(screen.getByText('Smartphone')).toBeInTheDocument()
    })

    it('calls onDelete when delete button is clicked', () => {
        render(
            <ProductList products={mockProducts} onAddToCart={mockOnAddToCart} onDelete={mockOnDelete} />
        )
        const deleteButton = screen.getAllByText('Delete')[0]
        fireEvent.click(deleteButton)
        expect(mockOnDelete).toHaveBeenCalledWith(1)
    })
})