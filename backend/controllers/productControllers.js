import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, category, quantity } = req.body
  const product = await Product.create({
    name,
    price,
    category,
    quantity,
  })
  
  if (product) {
    res.status(201).json({
      _id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
    })
  } else {
    res.status(400)
    throw new Error('Product not created')
  }

})
export { getProducts, createProduct }
