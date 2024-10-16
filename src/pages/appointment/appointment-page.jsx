import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AppointmentPage = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = { name, phone, message };

		await fetch('/api/appointment', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});

		setName('');
		setPhone('');
		setMessage('');
	};

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
			<h2>Запись к врачу</h2>
			<form
				onSubmit={submitHandler}
				style={{ padding: '30px', border: '1px solid #fff', width: '400px', display: 'grid', gap: '20px' }}
			>
				<label style={{ display: 'grid', gap: '5px' }}>
					<span>ФИО</span>
					<input
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={{ padding: '5px', border: '1px solid #fff' }}
					/>
				</label>
				<label style={{ display: 'grid', gap: '5px' }}>
					<span>Телефон</span>
					<input
						name="phone"
						type="tel"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						style={{ padding: '5px', border: '1px solid #fff' }}
					/>
				</label>
				<label style={{ display: 'grid', gap: '5px' }}>
					<span>Опишите вашу проблему</span>
					<textarea
						name="comment"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						style={{ padding: '5px', border: '1px solid #fff' }}
					/>
				</label>
				<button type="submit" style={{ justifySelf: 'center', padding: '10px', border: '1px solid #fff' }}>
					Отправить
				</button>
			</form>
		</div>
	);
};
