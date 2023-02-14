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
import FulfilledProfilePage from './Components/profilePage/fulfilledProfilePage';
import FulfilledProfileUpdatePage from './Components/profileUpdatePage/fulfilledUpdatePage';
import './index.css';
import FulfilledCompaniesPage from './Components/companiesPage/fullfiledCompaniesPage';
import FulfilledCompanyPage from './Components/companyPage/fulfilledCompanyPage';
import FulfilledUpdateCompanyPage from './Components/updateCompanyPage/fulfilledUpdateCompanyPage';
import CreateCompanyPage from './Components/createCompanyPage/createCompanyPage';

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
    element: <FulfilledProfilePage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/profile/update',
    element: <FulfilledProfileUpdatePage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/companies',
    element: <FulfilledCompaniesPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/company/:id',
    element: <FulfilledCompanyPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/company/update/:id',
    element: <FulfilledUpdateCompanyPage />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/createcompany',
    element: <CreateCompanyPage />,
    errorElement: <HandlerRouteError />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
