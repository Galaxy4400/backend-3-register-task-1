import express from 'express';
import chalk from 'chalk';
import mongoose from 'mongoose';
import { addAppointment, getAppointments } from './controllers/appointments.controller.js';
import { auth } from './middlewares/auth.js';
import cookieParser from 'cookie-parser';
import { loginUser } from './controllers/users.controller.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(auth);

app.post('/api/login', async (req, res) => {
	try {
		const token = await loginUser(req.body.email, req.body.password);

		res.cookie('token', token);

		res.json({ ok: true });
	} catch (error) {
		res.json({ ok: false });

		console.log(error);
	}
});

app.post('/api/appointment', async (req, res) => {
	await addAppointment(req.body);
});

app.get('/api/appointments', async (req, res) => {
	if (req.user) {
		const appointments = await getAppointments();

		res.json({ ok: true, data: appointments });
	} else {
		res.json({ ok: false });
	}
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
