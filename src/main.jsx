import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './pages/UserContext';
import './index.css';
import GithubPage from './pages/GithubPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignUpDone from './pages/SignUpDone';
import Login from './pages/Login';
import LoginDone from './pages/LoginDone';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/v1',
    element: 
    <UserProvider>
    <HomePage />
  </UserProvider>,
    errorElement: <NotFound />,
  },
  {
    path: '/v1/github',
    element: (
      <UserProvider>
        <GithubPage />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/v1/about',
    element: (
      <UserProvider>
        <AboutPage />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/v1/signup',
    element: (
      <UserProvider>
        <SignUp />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/v1/login',
    element: (
      <UserProvider>
        <Login />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/v1/signupdone',
    element: (
      <UserProvider>
        <SignUpDone />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/v1/logindone',
    element: (
      <UserProvider>
        <LoginDone />
      </UserProvider>
    ),
    errorElement: <NotFound />,
  },
]);

// Use ReactDOM.createRoot only once at the top level
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
        <HomePage />
      
    </RouterProvider>
  </React.StrictMode>,
);
