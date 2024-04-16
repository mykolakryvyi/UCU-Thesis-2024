import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import App from './App';
import MainLayout from './components/layout/MainLayout';
import FunnelLayout from './components/layout/FunnelLayout';
import HomePage from './pages/HomePage';
import FunnelHomePage from './pages/funnel/HomePage';
import ThemePage from './pages/funnel/ThemePage';
import GeneralPage from './pages/funnel/GeneralPage';
import EmailPage from './pages/funnel/EmailPage';
import QuizPage from './pages/funnel/QuizPage';
import PaymentPage from './pages/funnel/PaymentPage';
import PaymentsPage from './pages/funnel/PaymentsPage';
import AnalyticsPage from './pages/funnel/AnalyticsPage';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { E_ROUTE } from './constants/constants';

const router = createBrowserRouter([
    {
        path: E_ROUTE.MAIN,
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'funnels/:funnelId/',
                element: <FunnelLayout />,
                children: [
                    {
                        path: E_ROUTE.HOME,
                        element: <FunnelHomePage/>
                    },
                    {
                        path: E_ROUTE.GENERAL,
                        element: <GeneralPage/>
                    },
                    {
                        path: E_ROUTE.THEME,
                        element: <ThemePage/>
                    },
                    {
                        path: E_ROUTE.QUIZ,
                        element: <QuizPage/>
                    },
                    {
                        path: E_ROUTE.EMAIL,
                        element: <EmailPage/>
                    },
                    {
                        path: E_ROUTE.PAYMENT,
                        element: <PaymentPage/>
                    },
                    {
                        path: E_ROUTE.PAYMENTS,
                        element: <PaymentsPage/>
                    },
                    {
                        path: E_ROUTE.ANALYTICS,
                        element: <AnalyticsPage/>
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <Navigate replace to={E_ROUTE.MAIN} />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <App>
          <RouterProvider router={router} />
      </App>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
