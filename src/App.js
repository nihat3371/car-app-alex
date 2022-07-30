import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (<div>
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }} >
      <Link to={`/cars/list`}><Button variant="contained">Hi!, you can acces to our cars collection from here!</Button></Link>
    </Container>
  </div>
  )
}

export default App