import React, { lazy } from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Logged Pages
const Dashboard = lazy(() => import('pages/Dashboard'));
const Products = lazy(() => import('pages/Products'));

const config = {
  public: [
    {
      path: '/',
      component: Dashboard,
      title: 'Dashboard',
      exact: true,
      icon: <DashboardIcon />,
    },
    {
      path: '/products',
      component: Products,
      title: 'Produtos',
      exact: true,
      icon: <ShoppingCartIcon />,
    },
  ],
  protected: [],
};

export default config;
