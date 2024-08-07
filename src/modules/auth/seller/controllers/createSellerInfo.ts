import { Request, Response } from 'express'
import Seller from '../../../../models/sellerInfo'

const createSellerInfo = async (req: Request, res: Response) => {
	try {
		const { _id } = req.user
		const {
			shopName,
			shopDescription,
			shopContactNumber,
			businessLicense,
			taxId,
			website,
			gstNumber,
		} = req.body

		const sellerInfo = new Seller({
			_seller: _id,
			shopName,
			shopDescription,
			shopContactNumber,
			businessLicense,
			taxId,
			website,
			gstNumber,
		})
		await sellerInfo.save()
		res.status(200).json({ message: 'Seller Info created successfully!' })
	} catch (error) {
		res.status(500).json(error)
	}
}

export default createSellerInfo
