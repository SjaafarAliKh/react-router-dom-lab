import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Navbar from '../../components/NavBar/NavBar'

function ProductsList() {
    const [products, setProducts] = useState([])

    async function getProductsList() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        setProducts(response.data)
    }

    useEffect(() => {
        getProductsList()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>All Products</h1>

            {products.map((product) => (
                <div key={product._id}>
                    <h3>{product.title}</h3>
                    <Link to={`/products/${product._id}`}>See Details</Link>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
