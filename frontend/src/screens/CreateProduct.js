import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../actions/productActions'

function CreateProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userDetails } = userLogin

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (!userDetails) {
      navigate('/')
    }
  }, [userDetails, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProduct(name, price, quantity, category))
    navigate('/')
  }

  return (
    <FormContainer>
      <h1>Add Product</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>name</Form.Label>
          <Form.Control
            type='name'
            placeholder='enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Label>price</Form.Label>
          <Form.Control
            type='text'
            placeholder='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='quantity' className='py-2'>
          <Form.Label>quantity</Form.Label>
          <Form.Control
            type='text'
            placeholder='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='category' className='py-2'>
          <Form.Label> category</Form.Label>
          <Form.Control
            type='text'
            placeholder='product category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>
          add
        </Button>
      </Form>
    </FormContainer>
  )
}

export default CreateProduct
