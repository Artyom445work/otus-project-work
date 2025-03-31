import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import { ProductCard } from '../src/components/ProductCard'

const mockProduct = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    image: 'https://via.placeholder.com/150',
}

const mockOnAddToCart = jest.fn()

describe('ProductCard', () => {
    it('renders product details correctly', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />)
        expect(screen.getByText('Laptop')).toBeInTheDocument()
        expect(screen.getByText('$999.99')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://via.placeholder.com/150')
    })

    it('calls onAddToCart when "Add to Cart" button is clicked', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />)
        const addToCartButton = screen.getByText('Add to Cart')
        fireEvent.click(addToCartButton)
        expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct)
    })
})