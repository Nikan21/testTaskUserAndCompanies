import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';
import HandlerRouteError from './handlerRouterError'
import FirstPage from './Components/fistPage/firstPage'
import MainPage from './Components/mainPage/mainPage';
import AnonymPage from './Components/anonymPage/anonymPage'
import SignUpPage from './Components/signUpPage/signUpPage';
import SignInPage from './Components/signInPage/signInPage';
import ProfilePage from './Components/profilePage/profilePage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/main',
    element: <MainPage />,
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
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <HandlerRouteError />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
