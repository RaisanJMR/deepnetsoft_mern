import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import CreateProduct from './screens/CreateProduct'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='login' element={<LoginScreen />} />
            <Route path='register' element={<RegisterScreen />} />
            <Route path='create' element={<CreateProduct/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
