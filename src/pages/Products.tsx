import React, { useState } from 'react'
import { ProductList } from '../components/ProductList'
import { useCart } from '../context/CartContext'

export const Products: React.FC = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Smartphone', price: 499.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Tablet', price: 299.99, image: 'https://via.placeholder.com/150' },
    ])

    const { addToCart } = useCart()

    const [newProduct, setNewProduct] = useState({
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
        const productToAdd = { id: newId, ...newProduct }

        setProducts([...products, productToAdd])
        setNewProduct({ name: '', price: 0, image: '' })
    }

    const handleDelete = (id: number) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    return (
        <div>
            <h2>Products</h2>
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
            <ProductList products={products} onAddToCart={addToCart} onDelete={handleDelete} />
        </div>
    )
}