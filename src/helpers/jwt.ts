import jwt from 'jsonwebtoken'

const jwt_secret: string = process.env.JWT_SECRET as string

export interface IPayload {
	_id: string
	role: string
}

export const generate_token = (payload: IPayload): string => {
	const token = jwt.sign(
		{
			_id: payload._id,
			role: payload.role,
		},
		jwt_secret,
		{ expiresIn: process.env.JWT_EXPIRE }
	)

	return token
}
