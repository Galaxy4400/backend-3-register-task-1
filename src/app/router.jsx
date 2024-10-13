import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppointmentPage } from '../pages/appointment';

const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <div>Main page</div>,
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
				element: <div>Info page</div>,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={routerConfig} />;
