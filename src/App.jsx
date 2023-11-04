import Layout from 'Layout';
import { lazy, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setAuthHeader, useRefreshQuery } from 'redux/authReducer';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const BookPage = lazy(() => import('./pages/BookPage'));

export function App() {
  const token = useRef(localStorage.getItem('token'));
  setAuthHeader(token.current);
  const { data } = useRefreshQuery();
  console.log(data);
  // useEffect(() => {

  //   refresh();
  // }, [refresh]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<BookPage />} />
      </Route>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}
