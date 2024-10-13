import express from 'express';
import chalk from 'chalk';
import mongoose from 'mongoose';
import { addAppointment, getAppointments } from './controllers/appointments.controller.js';
import { auth } from './middlewares/auth.js';

const port = 3000;
const app = express();

app.use(express.json());

app.post('/api/appointment', async (req, res) => {
	const appointment = await addAppointment(req.body);

	res.json(appointment);
});

app.use(auth);

app.get('/api/appointments', async (req, res) => {
	const appointments = await getAppointments();

	res.json(appointments);
});

mongoose
	.connect(
		'mongodb+srv://sovremennik4400:qwerty123@cluster0.ohkru.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0',
	)
	.then(() => {
		app.listen(port, () => {
			console.log(chalk.green(`Server has been started on port ${port}...`));
		});
	});
