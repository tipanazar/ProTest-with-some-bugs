import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PublicRoute from '../shared/components/PublicRoute';
import PrivateRoute from '../shared/components/PrivateRoute';

import LayoutPage from '../pages/LayoutPage';
import Loader from '../shared/components/Loader';
const AuthPage = lazy(() => import('../pages/AuthPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const TestPage = lazy(() => import('../pages/TestPage'));
const ResultsPage = lazy(() => import('../pages/ResultsPage'));
const UsefulInfoPage = lazy(() => import('../pages/UsefulInfoPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route element={<PublicRoute />}>
            <Route path="auth" element={<AuthPage />} />
          </Route>
          <Route path="contacts" element={<ContactsPage />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<MainPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="useful-infa" element={<UsefulInfoPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
