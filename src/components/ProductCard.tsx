import React from 'react'

interface Product {
    id: number
    name: string
    price: number
    image: string
}

interface ProductCardProps {
    product: Product
    onAddToCart: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}