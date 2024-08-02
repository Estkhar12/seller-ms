import jwt from 'jsonwebtoken'

const jwt_secret: string = process.env.JWT_SECRET as string
export interface IPayload {
	_id: string
}

export const generate_token = (payload: IPayload): string => {
	const token = jwt.sign(
		{
			_id: payload._id,
		},
		jwt_secret,
		{ expiresIn: process.env.JWT_EXPIRE }
	)

	return token
}
