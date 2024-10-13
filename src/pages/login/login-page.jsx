import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = { email, password };

		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});

		const responseData = await response.json();

		if (responseData.ok) {
			navigate('/appointments');
		}
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
				<ul style={{ display: 'flex', gap: '30px' }}>
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
			<h2>Вход в систему</h2>
			<form
				onSubmit={submitHandler}
				style={{ padding: '30px', border: '1px solid #fff', width: '400px', display: 'grid', gap: '20px' }}
			>
				<label style={{ display: 'grid', gap: '5px' }}>
					<span>Email</span>
					<input
						name="email"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{ padding: '5px', border: '1px solid #fff' }}
					/>
				</label>
				<label style={{ display: 'grid', gap: '5px' }}>
					<span>Пароль</span>
					<input
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ padding: '5px', border: '1px solid #fff' }}
					/>
				</label>
				<button type="submit" style={{ justifySelf: 'center', padding: '10px', border: '1px solid #fff' }}>
					Войти
				</button>
			</form>
		</div>
	);
};
