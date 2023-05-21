import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Diary from './pages/Diary';
import Calendar from './pages/Calendar';

import './index.css';
import Nav from './components/Nav';

function Layout() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Diary
      },
      {
        path: 'diary',
        Component: Diary
      },
      {
        path: 'calendar',
        Component: Calendar
      }
    ]
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}
