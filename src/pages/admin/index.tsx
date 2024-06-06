import { Link } from 'react-router-dom'

export function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <Link to={'/shop'} className="text-blue-500 font-bold hover:underline">
        Shop
      </Link>
    </div>
  )
}
