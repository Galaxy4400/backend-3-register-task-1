import chalk from 'chalk';
import { Appointment } from '../models/appointment.js';

export const getAppointments = async () => {
	const appointments = await Appointment.find();

	return appointments;
};

export const addAppointment = async (data) => {
	const appointment = await Appointment.create(data);

	console.log(chalk.bgGreen('Note was added!'));

	return appointment;
};
