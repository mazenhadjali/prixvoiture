import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DASHBOARD, LOGIN, MARQUES, PROFILE, REGISTER, } from './routeConstants.ts';
import DashboardLayout from './layout/index.tsx';
import store from './store/store.tsx';
import LandingPage from './pages/Landing/index.tsx';
import DashboardMainOutlet from './pages/dashboardMainOutlet/index.tsx';
import Login from './pages/auth/Login.tsx';
import AuthGard from './authProvider.tsx';
import ProfilePage from './pages/profile.tsx';
import Register from './pages/auth/Register.tsx';
import Marquespage from './pages/marquespage.tsx';



const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: DASHBOARD,
    element: <AuthGard />,
    children: [
      {
        path: DASHBOARD,
        element: <DashboardLayout />,
        children: [
          { path: DASHBOARD + "/", element: <DashboardMainOutlet /> },
          { path: PROFILE, element: <ProfilePage /> },
          { path: MARQUES, element: <Marquespage /> },
        ]
      },
    ]
  },

  {
    path: '/',
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

