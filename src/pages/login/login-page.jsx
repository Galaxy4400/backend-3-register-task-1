import { useState } from 'react';

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const data = { email, password };

		await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});

		setEmail('');
		setPassword('');
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
