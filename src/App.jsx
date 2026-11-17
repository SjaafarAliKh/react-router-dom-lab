import { Routes, Route } from 'react-router'
import Homepage from './pages/ProductDetails/Homepage'
import ProductsList from './pages/ProductList/ProductList'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductsDetails from './pages/ProductDetails/ProductDetails'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  )
}

export default App
