import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Diary from './pages/Diary';
import Scheduler from './pages/Scheduler';
import Register from './pages/Register';
import Nav from './components/Nav';
import Before from './pages/Before';
import After from './pages/After';
import ListTest from './pages/dev/ListTest';
import Post from './pages/Post';
import SplashScreen from './pages/SplashScreen';
import TestToast from './pages/dev/TestToast';
import { ToastContainer } from '@kimploo/react-toastify';
// import './toast.css';
import '@kimploo/react-toastify/dist/ReactToastify.css';
import Trash from './pages/Trash';
import TrashPost from './pages/TrashPost';
import SchedulerPost from './pages/SchedulerPost';
import EditPost from './pages/EditPost';

const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <div className="px-5 bg-mono-100">
        <Outlet></Outlet>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Loading />}></Route>
      <Route path="diary" element={<Diary />}></Route>
      <Route path="scheduler" element={<Scheduler />}></Route>
      <Route path=":id" element={<SchedulerPost />}></Route>
      <Route path="scheduler/:id" element={<SchedulerPost />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="before" element={<Before />}></Route>
      <Route path="after" element={<After />}></Route>
      <Route path="list-test" element={<ListTest />}></Route>
      <Route path="edit/:id" element={<EditPost />}></Route>
      <Route path="post" element={<Post />}></Route>
      <Route path="trash" element={<Trash />}></Route>
      <Route path="trash/:id" element={<TrashPost />}></Route>
      {import.meta.env.DEV ? (
        <Route path="test/list" element={<ListTest />}></Route>
      ) : null}
      {import.meta.env.DEV ? (
        <Route path="test/splash" element={<SplashScreen />}></Route>
      ) : null}
      {import.meta.env.DEV ? (
        <Route path="test/toast" element={<TestToast />}></Route>
      ) : null}
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<SplashScreen />} />
    </Provider>
  );
}
