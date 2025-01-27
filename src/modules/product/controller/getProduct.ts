import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'
import Product from '../../../models/product'

const getProduct = async (req: Request, res: Response) => {
	try {
		const { _id } = req.user
		const { productId } = req.query
		console.log(productId)
		if (!isValidObjectId(productId)) {
			return res.status(400).json({ error: 'Invalid Product ID' })
		}

		const product = await Product.aggregate([
			{
				$match: {
					_id: productId,
					_createdBy: _id,
				},
			},
			{
				$lookup: {
					from: 'categories',
					localField: '_category',
					foreignField: '_id',
					as: 'category',
				},
			},
			{ $unwind: '$category' },
			{
				$project: {
					_id: 1,
					name: 1,
					price: 1,
					mrp: 1,
					description: 1,
					stockAvailable: 1,
					isActive: 1,
					category: '$category.name',
				},
			},
		])

		if (product.length === 0) {
			return res.status(404).json({ error: 'No Product found.' })
		}

		return res.status(200).json({ success: true, data: product })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error })
	}
}

export default getProduct
