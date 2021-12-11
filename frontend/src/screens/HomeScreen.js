import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table, Button } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'
function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const userLogin = useSelector((state) => state.userLogin)
  const { userDetails } = userLogin
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container className='py-4'>
      <h3>products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Price($)</th>
                <th>Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to='/create'>
          {userDetails ? <Button variant='primary'> add product</Button> : null}
          </Link>
        </>
      )}
    </Container>
  )
}

export default HomeScreen
