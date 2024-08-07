import express from 'express'
import createSellerInfo from '../controllers/createSellerInfo'

const router = express.Router()

router.post('/sellerInfo', createSellerInfo)

const SellerInfo = router
export default SellerInfo
