import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants.js';

export const auth = (req, res, next) => {
	const token = req.cookies.token;

	try {
		const verifyResult = jwt.verify(token, JWT_SECRET);

		req.user = {
			email: verifyResult.email,
		};

		next();
	} catch (error) {
		console.log(error);
	}
};
