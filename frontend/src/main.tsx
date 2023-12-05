import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CREATE_USER, DASHBOARD, LOGIN, PROFILE, USERS, USER_DETAILS } from './routeConstants.ts';
import DashboardLayout from './layout/index.tsx';
import store from './store/store.tsx';
import LandingPage from './pages/Landing/index.tsx';
import DashboardMainOutlet from './pages/dashboardMainOutlet/index.tsx';
import Login from './pages/auth/Login.tsx';
import AuthGard from './authProvider.tsx';
import ProfilePage from './pages/profile.tsx';
import UsersPage from './pages/userslist.tsx';
import UserDetails from './pages/userdetails.tsx';
import CreateUser from './pages/createUser.tsx';



const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
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
          { path: USERS, element: <UsersPage /> },
          { path: CREATE_USER, element: <CreateUser /> },
          // { path: USER_DETAILS, element: <UserDetails /> },
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

