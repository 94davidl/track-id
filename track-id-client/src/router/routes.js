import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'

export const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];
