import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { AppointmentPage } from '../pages/appointment';
import { InfoPage } from '../pages/info';

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
				element: <div>Login page</div>,
			},
			{
				path: '/info',
				element: <InfoPage />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={routerConfig} />;
