import React, { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <section>
            <Outlet />
            <ToastContainer />
          </section>
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
