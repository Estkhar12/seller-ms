import { Document, model, Schema } from 'mongoose'

interface ICategory extends Document {
	name: string
	isDeleted: boolean
	_createdBy: Schema.Types.ObjectId
}

const categorySchema: Schema = new Schema(
	{
		categoryName: {
			type: String,
			required: true,
		},
		_createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'Admin',
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true, versionKey: false }
)

const Category = model<ICategory>('Category', categorySchema)

export default Category
