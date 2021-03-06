import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/register').post(registerUser)
export default router
