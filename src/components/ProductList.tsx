import React from 'react'
import { ProductCard } from './ProductCard'

interface Product {
    id: number
    name: string
    price: number
    image: string
}

interface ProductListProps {
    products: Product[]
    onAddToCart: (product: Product) => void
    onDelete: (id: number) => void
}

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onDelete }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}