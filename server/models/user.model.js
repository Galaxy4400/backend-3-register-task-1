import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const UserSchema = Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: 'Invalid email',
		},
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model('User', UserSchema);
