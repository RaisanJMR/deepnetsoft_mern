import express from 'express'
import {
  getProducts,
  createProduct,
} from '../controllers/productControllers.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getProducts)
router.route('/create').post(createProduct)

export default router
