import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Regsiter.jsx'
import PrivateRoute from './guard/PrivateRouter.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import Orders from './pages/Orders.jsx';
import Analytics from './pages/Analytics.jsx';
import Branches from './pages/Branches.jsx';
import Categories from './pages/categories.jsx';
import Products from './pages/Products.jsx';
import Tasks from './pages/Tasks.jsx';
import Workers from './pages/Workers.jsx';
import Settings from './pages/Settings.jsx';
import Customers from './pages/Customers.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
    {path: '/dashboard', element: <Dashboard />},
    {path: '/users', element: <Users />},
    {path: '/orders', element: <Orders />},
    {path: '/analytics', element: <Analytics />},
    {path: '/branches', element: <Branches />},
    {path: '/categories', element: <Categories />},
    {path: '/products', element: <Products />},
    {path: '/tasks', element: <Tasks />},
    {path: '/workers', element: <Workers />},
    {path: '/settings', element: <Settings />},
    {path: '/customers', element: <Customers /> },
    ]
  },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>
);