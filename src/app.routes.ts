import express from 'express'
import verify_token from './middlewares/verifyToken'
import ProductRouter from './modules/product/routes/product'
import BundleRouter from './modules/bundle/routes/bundle'
import SellerInfo from './modules/auth/seller/routes/sellerInfo'

const router = express.Router()

router.use(verify_token)
router.use('/seller', SellerInfo)
router.use('/product', ProductRouter)
router.use('/bundle', BundleRouter)

const AllRouter = router
export default AllRouter
