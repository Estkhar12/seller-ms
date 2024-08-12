import { Schema, Document, model } from 'mongoose'

export interface IProduct extends Document {
	productName: string
	price: number
	mrp: number
	discount?: number
	stockAvailable: number
	description: string
	isDeleted: boolean
	isBlocked: boolean
	_blockedBy?: Schema.Types.ObjectId
	_category: Schema.Types.ObjectId
	_createdBy: {
		_id: Schema.Types.ObjectId
		role: 'seller' | 'admin'
	}
}

const productSchema: Schema = new Schema(
	{
		productName: {
			type: String,
			required: [true, 'Product name is required!'],
		},
		description: {
			type: String,
			required: [true, 'Description is required!'],
		},
		price: {
			type: Number,
			required: [true, 'Price is required!'],
		},
		mrp: {
			type: Number,
			required: [true, 'MRP is required!'],
		},
		discount: {
			type: [Number, 'Discount is must be a number'],
			default: undefined,
		},
		stockAvailable: {
			type: Number,
			required: [true, 'Stock Available is required!'],
			default: 0,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
		_blockedBy: {
			type: Schema.Types.ObjectId,
			default: undefined,
		},
		_createdBy: {
			_id: {
				type: Schema.Types.ObjectId,
				required: [true, 'Id is required'],
			},
			role: {
				type: String,
				enum: ['seller', 'admin'],
				required: [true, 'Role is required!'],
			},
		},
		_category: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const Product = model<IProduct>('Product', productSchema)
export default Product
