import chalk from 'chalk';
import { Appointment } from '../models/appointment.js';

export const appointmentCreate = async (data) => {
	const appointment = await Appointment.create(data);

	console.log(chalk.bgGreen('Note was added!'));

	return appointment;
};
