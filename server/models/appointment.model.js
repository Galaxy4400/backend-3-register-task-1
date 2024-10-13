import mongoose, { Schema } from 'mongoose';

const appointmentSchema = new Schema({
	name: String,
	phone: String,
	message: String,
	date: { type: Date, default: Date.now },
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
