import Layout from 'Layout';
import PrivateRout from 'components/routes/PrivateRout';
import PublicRoute from 'components/routes/PublicRoute';
import { lazy, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setAuthHeader, useRefreshQuery } from 'redux/authReducer';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const BookPage = lazy(() => import('./pages/BookPage'));

export function App() {
  const token = useRef(localStorage.getItem('token'));
  setAuthHeader(token.current);
  useRefreshQuery();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/bookpage"
          element={
            <PrivateRout>
              <BookPage />
            </PrivateRout>
          }
        />
      </Route>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}
