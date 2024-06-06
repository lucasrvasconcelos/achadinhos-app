import { Link } from 'react-router-dom'

export function App() {
  return (
    <h1 className="p-8">
      Acesse a rota{' '}
      <Link className="text-blue-500 font-bold hover:underline" to={'/shop'}>
        /shop
      </Link>{' '}
      ou{' '}
      <Link className="text-blue-500 font-bold hover:underline" to={'/admin'}>
        /admin
      </Link>
    </h1>
  )
}
