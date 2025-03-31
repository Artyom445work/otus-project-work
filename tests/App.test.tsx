import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from '@jest/globals'
import { App } from '../src/App'

describe('App', () => {
    it('renders the Home page by default', () => {
        render(
                <App />
        )
        expect(screen.getByText('Welcome to the Online Store App!')).toBeInTheDocument()
    })

    it('navigates to the Products page', () => {
        render(
                <App />
        )
        expect(screen.getByText('Products')).toBeInTheDocument()
    })

    it('navigates to the Cart page', () => {
        render(
                <App />
        )
        expect(screen.getByText('Cart')).toBeInTheDocument()
    })
})