import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div> <Link to={`/cars/list`}>Hi!, you can acces to our cars collection from here</Link></div>
  )
}

export default App