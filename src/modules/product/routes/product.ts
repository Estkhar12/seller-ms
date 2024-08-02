import expres from 'express'
import addProduct from '../controller/addProduct'
import getProduct from '../controller/getProduct'
import updateProduct from '../controller/updateProduct'
import deleteProduct from '../controller/deleteProduct'
import getAllProduct from '../controller/getAllProduct'

const router = expres.Router()

router.post('/add', addProduct)
router.get('/get-detail', getProduct)
router.patch('/update', updateProduct)
router.delete('/delete', deleteProduct)
router.get('/all-products', getAllProduct)

const ProductRouter = router
export default ProductRouter
