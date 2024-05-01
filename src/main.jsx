import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import OnBoarding from './login/On_Boarding';
import LogIn from './login/Sign_In';
import SignUp from './login/Sign_Up'
import ForgotPass from './login/Forgot_Pass';
import AgeSelection from './login/Age_Selection';
import Home from './pages/DialectChoicesPage';
import HomeStandby from './pages/ContentStandbyPage';
import ContentOne from './content/Content_One';
import ContentTwo from './content/Content_Two';
import ContentThree from './content/Content_Three';
import ContentFour from './content/Content_Four';
import AnimalCategory from './category/Animals';
import FoodCategory from './category/Foods';
import HouseholdItems from './category/HouseholdItems';
import BasicPhrases from './category/BasicPhrases';

const router = createBrowserRouter([
  {
    path: '/dialecto',
    element: <OnBoarding />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/sign-in',
    element: <LogIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/forgot-pass',
    element: <ForgotPass />
  },
  {
    path: '/age-selection',
    element: <AgeSelection />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home-standby',
    element: <HomeStandby />
  },
  {
    path: '/content-one',
    element: <ContentOne />
  },
  {
    path: '/content-two',
    element: <ContentTwo />
  },
  {
    path: '/content-three',
    element: <ContentThree />
  },
  {
    path: '/content-four',
    element: <ContentFour />
  },
  {
    path: '/animal-category',
    element: <AnimalCategory />
  },
  {
    path: '/food-category',
    element: <FoodCategory />
  },
  {
    path: '/household-item-category',
    element: <HouseholdItems />
  },
  {
    path: '/basic-phrases-category',
    element: <BasicPhrases />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);