import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from '@jest/globals'
import { Products } from '../src/pages/Products'
import { CartProvider } from '../src/context/CartContext'

describe('Products', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MemoryRouter>
            <CartProvider>{children}</CartProvider>
        </MemoryRouter>
    )

    it('renders the initial list of products', () => {
        render(<Products />, { wrapper })

        expect(screen.getByText('Laptop')).toBeInTheDocument()
        expect(screen.getByText('Smartphone')).toBeInTheDocument()
        expect(screen.getByText('Tablet')).toBeInTheDocument()
    })

    it('adds a new product through the form', () => {
        render(<Products />, { wrapper })

        const nameInput = screen.getByPlaceholderText('Product Name')
        const priceInput = screen.getByPlaceholderText('Price')
        const imageInput = screen.getByPlaceholderText('Image URL')
        const addButton = screen.getByText('Add Product')

        fireEvent.change(nameInput, { target: { value: 'New Product' } })
        fireEvent.change(priceInput, { target: { value: '100' } })
        fireEvent.change(imageInput, { target: { value: 'https://example.com/image.jpg' } })
        fireEvent.click(addButton)

        expect(screen.getByText('New Product')).toBeInTheDocument()
        expect(screen.getByText('$100.00')).toBeInTheDocument()
    })

    it('deletes a product from the list', () => {
        render(<Products />, { wrapper })

        const deleteButton = screen.getAllByText('Delete')[0]
        fireEvent.click(deleteButton)

        expect(screen.queryByText('Laptop')).not.toBeInTheDocument()
    })

    it('shows an alert when form fields are empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {}) // Мокаем alert

        render(<Products />, { wrapper })

        const addButton = screen.getByText('Add Product')
        fireEvent.click(addButton)

        expect(window.alert).toHaveBeenCalledWith('Please fill in all fields')
    })
})