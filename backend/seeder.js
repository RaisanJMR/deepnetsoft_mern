import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import users from './data/users.js'
import products from './data/products.js'
dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    await User.insertMany(users)
    await Product.insertMany(products)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
