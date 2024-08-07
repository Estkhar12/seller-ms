import { Schema, Document, model } from 'mongoose'

export interface ISeller extends Document {
	_seller: Schema.Types.ObjectId
	shopName: string
	shopDescription?: string
	shopContactNumber: string
	businessLicense: string
	taxtId: string
	gstNumber: string
	website?: string
}

const sellerSchema: Schema = new Schema({
	_seller: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		unique: true,
	},
	shopName: {
		type: String,
		required: true,
	},
	shopDescription: {
		type: String,
	},
	shopContactNumber: {
		type: String,
		requiredl: true,
	},
	taxId: {
		type: String,
		required: true,
	},
	gstNumber: {
		type: String,
	},
	website: {
		type: String,
	},
})

const Seller = model<ISeller>('Seller', sellerSchema)
export default Seller
