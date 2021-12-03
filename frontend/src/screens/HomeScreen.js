import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Table, Button } from 'react-bootstrap'

function HomeScreen() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/v1/products')
      console.log(res)
      setProducts(res.data)
    }
    fetchProducts()
  },[])
  return (
    <>
      <Container className='py-4'>
        <h3>products</h3>
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
        <Button variant='primary'>
          <i className='fa fa-plus' aria-hidden='true'></i> add product
        </Button>
      </Container>
    </>
  )
}

export default HomeScreen
