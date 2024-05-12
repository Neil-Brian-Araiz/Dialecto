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
import ProfilePage from './pages/Profile';
import ProgressPage from './pages/Progress';
import Video from './content/BasicVid';

const router = createBrowserRouter([
  {
    path: '/dialecto',
    element: <OnBoarding />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/dialecto/sign-in',
    element: <LogIn />
  },
  {
    path: '/dialecto/sign-up',
    element: <SignUp />
  },
  {
    path: '/dialecto/forgot-pass',
    element: <ForgotPass />
  },
  {
    path: '/dialecto/age-selection',
    element: <AgeSelection />
  },
  {
    path: '/dialecto/home',
    element: <Home />
  },
  {
    path: '/dialecto/home-standby',
    element: <HomeStandby />
  },
  {
    path: '/dialecto/content-one',
    element: <ContentOne />
  },
  {
    path: '/dialecto/content-two',
    element: <ContentTwo />
  },
  {
    path: '/dialecto/content-three',
    element: <ContentThree />
  },
  {
    path: '/dialecto/content-four',
    element: <ContentFour />
  },
  {
    path: '/dialecto/animal-category',
    element: <AnimalCategory />
  },
  {
    path: '/dialecto/food-category',
    element: <FoodCategory />
  },
  {
    path: '/dialecto/household-item-category',
    element: <HouseholdItems />
  },
  {
    path: '/dialecto/basic-phrases-category',
    element: <BasicPhrases />
  },
  {
    path: '/dialecto/profile-page',
    element: <ProfilePage />
  },
  {
    path: '/dialecto/progress-page',
    element: <ProgressPage />
  },
  {
    path: '/dialecto/video',
    element: <Video />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);