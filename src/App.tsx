import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Diary from './pages/Diary';
import Calendar from './pages/Calendar';
import Register from './pages/Register';
import Nav from './components/Nav';
import Before from './pages/Before';
import './index.css';

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
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'before',
        Component: Before
      }
    ]
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Provider>
  );
}
