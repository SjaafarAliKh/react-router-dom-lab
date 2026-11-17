import Navbar from '../../components/NavBar/NavBar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateProduct() {
  const [title, settitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const newProduct = {
      title,
      description,
      category,
      price,
      quantity
      
    }

    await axios.post('https://products-api-164h.onrender.com/products', newProduct)
    navigate('/')
  }

  return (
    <div>
      <Navbar />
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            step="any"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
