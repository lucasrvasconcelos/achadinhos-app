import { createBrowserRouter } from 'react-router-dom'
import { Admin } from './pages/admin'
import { Shop } from './pages/shop'
import { App } from './App'

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
])
