import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AppointmentsPage = () => {
	const navigate = useNavigate();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		fetch('/api/appointments')
			.then((response) => response.json())
			.then(({ data, ok }) => {
				ok ? setAppointments(data) : navigate('/login');
			});
	}, [navigate]);

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				gap: '30px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<nav>
				<ul style={{ display: 'flex', fontSize: '20px', gap: '30px' }}>
					<li style={{ listStyle: 'none' }}>
						<Link style={{ color: '#fff', fontSize: '20px', textTransform: 'uppercase' }} to="/appointment">
							Запись
						</Link>
					</li>
					<li style={{ listStyle: 'none' }}>
						<Link style={{ color: '#fff', fontSize: '20px', textTransform: 'uppercase' }} to="/login">
							Вход
						</Link>
					</li>
					<li style={{ listStyle: 'none' }}>
						<Link style={{ color: '#fff', fontSize: '20px', textTransform: 'uppercase' }} to="/appointments">
							Таблица
						</Link>
					</li>
				</ul>
			</nav>
			<h2>Заявки с формы</h2>
			<table style={{ width: '1000px', borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={{ border: '1px solid #fff', padding: '10px' }}>Дата отправки</th>
						<th style={{ border: '1px solid #fff', padding: '10px' }}>ФИО</th>
						<th style={{ border: '1px solid #fff', padding: '10px' }}>Телефон</th>
						<th style={{ border: '1px solid #fff', padding: '10px' }}>Проблема</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment) => (
						<tr key={appointment._id}>
							<td style={{ border: '1px solid #fff', padding: '10px' }}>
								{format(appointment.date, 'MM.dd.yyyy')}
							</td>
							<td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.name}</td>
							<td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.phone}</td>
							<td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.message}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
