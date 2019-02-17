import Home from '@/components/Home'
import Register from '@/components/Register'

export const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
];
