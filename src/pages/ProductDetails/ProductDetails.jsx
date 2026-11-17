import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'

function ProductsDetails() {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()
  const navigate = useNavigate()

  async function getProductDetails() {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
      console.log('Single product response:', response.data)
      setProduct(response.data)
  }

  async function deleteProduct() {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
    navigate('/products')
  }

  useEffect(() => {
    getProductDetails()
  }, [productId])

  if (!product) {
    return (
      <div>
        <NavBar />
        <h2>Loading...</h2>
      </div>
    )
  }


  return (
    <div>
      <NavBar />
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>

      <button onClick={deleteProduct}>Delete Product</button>
    </div>
  )
}


export default ProductsDetails
