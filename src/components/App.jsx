import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div> 
      <h3>lista</h3>
      <Link to={`/professores`}>Lista de professores</Link>
      <br/>
      <Link to={`/sobre`}>Info sobre o projeto</Link>
      <br/>
      <hr/>
      <Outlet/>
    </div>
  )
}

export default App
