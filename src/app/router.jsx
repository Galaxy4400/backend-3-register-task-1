import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { AppointmentPage } from '../pages/appointment';
import { InfoPage } from '../pages/info';
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
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/info',
				element: <InfoPage />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={routerConfig} />;
