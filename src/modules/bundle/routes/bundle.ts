import express from 'express'
import addBundle from '../controller/addBundle'
import getBundle from '../controller/getBundle'
import getAllBundle from '../controller/getAllBundle'
import updateBundle from '../controller/updateBundle'

const router = express.Router()

router.post('/add-bundle', addBundle)
router.get('/get-bundle', getBundle)
router.get('/get-all', getAllBundle)
router.patch('/update', updateBundle)

const BundleRouter = router
export default BundleRouter
