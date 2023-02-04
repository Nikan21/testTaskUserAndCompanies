import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'
import HandlerRouteError from './handlerRouterError'
import FirstPage from './Components/fistPage/firstPage'
import StartPage from './Components/startPage/startPage';
import AnonymPage from './Components/anonymPage/anonymPage'
import SignUpPage from './Components/signUpPage/signUpPage';
import SignInPage from './Components/signInPage/signInPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/main',
    element: <StartPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/anonym',
    element: <AnonymPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/signup',
    element: <SignUpPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/signin',
    element: <SignInPage />,
    errorElement: <HandlerRouteError />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
