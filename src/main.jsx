import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErroRota } from './components/ErroRota.jsx'
import { ListaProfessores } from './components/ListaProfessores.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      errorElement: <ErroRota/>,
      children: [
        {
          path:"sobre"
        }
      ]
    },
    {
      path:"/professores",
      element: <ListaProfessores/>,
      errorElement: <ErroRota/>
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
