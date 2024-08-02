import { Request, Response } from 'express'
import Product from '../../../models/product'

const addProduct = async (req: Request, res: Response) => {
	try {
		const { userId } = req.user
		const { name, description, mrp, discount, _category, stockAvailable } = req.body
		let finalPrice: number = mrp
		if (discount) finalPrice = mrp - (mrp * discount) / 100
		const product = await Product.create({
			name,
			price: finalPrice,
			description,
			mrp,
			discount,
			_category,
			stockAvailable,
			_createdBy: userId,
		})
		return res.status(201).json({ message: 'Product added..', data: product })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error })
	}
}

export default addProduct
