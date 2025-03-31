import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import { Header } from '../src/components/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('renders the header title', async() => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )
        const title = await screen.getByText("Online Store App")
        expect(title).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )
        expect(screen.getByText(/Home/i)).toBeInTheDocument()
        expect(screen.getByText(/Products/i)).toBeInTheDocument()
        expect(screen.getByText(/Cart/i)).toBeInTheDocument()
    })
})