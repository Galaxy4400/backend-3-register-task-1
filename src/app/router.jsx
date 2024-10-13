import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { AppointmentPage } from '../pages/appointment';
import { AppointmentsPage } from '../pages/appointments';
import { LoginPage } from '../pages/login';

const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <Navigate to="/appointment" replace />,
			},
			{
				path: '/appointment',
				element: <AppointmentPage />,
			},
			{
				path: '/appointments',
				element: <AppointmentsPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={routerConfig} />;
