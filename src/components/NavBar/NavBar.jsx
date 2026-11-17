import { Link } from 'react-router'

function NavBar() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
      <Link to='/'>Homepage</Link>
      <Link to='/products'>Products</Link>
      <Link to='/new-product'>New Products</Link>
    </div>
  )
}

export default NavBar
