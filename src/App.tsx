import React, { useState } from 'react'
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { useCart } from './hooks/useCart'
import { Product } from './types'

export const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Smartphone', price: 499.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Tablet', price: 299.99, image: 'https://via.placeholder.com/150' },
    ])

    const { cart, addToCart, removeFromCart } = useCart()

    const [newProduct, setNewProduct] = useState<{ name: string; price: number; image: string }>({
        name: '',
        price: 0,
        image: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewProduct({ ...newProduct, [name]: name === 'price' ? parseFloat(value) : value })
    }

    const addNewProduct = () => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            alert('Please fill in all fields')
            return
        }

        const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1
        const productToAdd: Product = {
            id: newId,
            name: newProduct.name,
            price: newProduct.price,
            image: newProduct.image,
        }

        setProducts([...products, productToAdd])
        setNewProduct({ name: '', price: 0, image: '' })
    }

    const deleteProduct = (id: number) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    return (
        <div className="app">
            <Header />
            <h2>Online Store</h2>

            <div className="add-product-form">
                <h3>Add New Product</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                />
                <button onClick={addNewProduct}>Add Product</button>
            </div>

            <ProductList products={products} onAddToCart={addToCart} onDelete={deleteProduct} />
            <Cart cart={cart} onRemoveFromCart={removeFromCart} />
        </div>
    )
}