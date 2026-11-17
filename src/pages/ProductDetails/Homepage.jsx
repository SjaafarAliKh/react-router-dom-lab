import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router'

function Homepage() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Grocery Store Inventory System</h1>
      <p>Manage store products, check stock quantities, or add new items to the catalog.</p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/products">View All Products</Link>
        <Link to="/new-product">Add New Product</Link>
      </div>
    </div>
  )
}

export default Homepage
