import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use('/api/v1/products', productRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = 8080
app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold.underline)
)
