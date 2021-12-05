import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
function LoginScreen() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  console.log('USER LOGIN DETAILS->', userLogin)
  const { loading, error, userDetails } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'
  console.log(redirect)
  useEffect(() => {
    // redirect to home page if user exist's
    if (userDetails) {
      navigate(redirect)
    }
  }, [navigate, userDetails, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    // LOGIN
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
      <h1>Log In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>email</Form.Label>
          <Form.Control
            type='email'
            placeholder='enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='py-2'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            placeholder='enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          sign in
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          new customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
