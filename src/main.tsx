import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { RouterProvider } from 'react-router-dom'
import { routerApp } from './routes-app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerApp} />
  </React.StrictMode>,
)
