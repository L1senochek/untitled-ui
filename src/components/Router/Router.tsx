import {
  HOME_PATH,
  INITIAL_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  UI_KIT_PATH,
} from '@/utils/const/const';
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Home from '@/pages/Home/Home';
import SignUp from '@/pages/SignUp/SignUp';
import SignIn from '@/pages/SignIn/SignIn';
import NotFound from '../NotFound/NotFound';
import UIKitLayout from '@/layouts/UIKitLayout/UIKitLayout';
import UIKit from '@/pages/UIKit/UIKit';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={INITIAL_PATH}
        element={<MainLayout />}
        errorElement={<ErrorMessage />}
      >
        <Route path="" element={<Navigate to={HOME_PATH} />} />
        <Route path={HOME_PATH} index element={<Home />} />
        <Route path={SIGN_UP_PATH} element={<SignUp />} />
        <Route path={SIGN_IN_PATH} element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path={INITIAL_PATH}
        element={<UIKitLayout />}
        errorElement={<ErrorMessage />}
      >
        <Route path={UI_KIT_PATH} element={<UIKit />} />
      </Route>
    </>
  )
);

export default Router;
