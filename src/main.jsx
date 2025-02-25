import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root/Root';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthProviders from './providers/AuthProviders';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>Page not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
