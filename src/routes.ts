import { IconType } from '@components/icons/Icons';

type group = 'main' | 'others';
interface Route {
  name: string;
  path: string;
  icon: IconType;
}
type RouteGroup = Record<group, Array<Route>>;

export const routes: RouteGroup = {
  main: [
    { name: 'Home', path: '/', icon: 'home' },
    {
      name: 'Dashboard',
      path: '/',
      icon: 'bar',
    },
    {
      name: 'Projects',
      path: '/',
      icon: 'layers',
    },
    {
      name: 'Tasks',
      path: '/',
      icon: 'layers',
    },
    {
      name: 'Reporting',
      path: '/',
      icon: 'flags',
    },
    {
      name: 'Users',
      path: '/',
      icon: 'users',
    },
  ],
  others: [
    {
      name: 'Support',
      path: '/',
      icon: 'lifebuoy',
    },
    {
      name: 'Settings',
      path: '/',
      icon: 'setting',
    },
  ],
};
