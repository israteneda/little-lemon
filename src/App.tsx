import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Create, Confirm, Home, NotFound } from '@pages';
import { Footer, Nav } from '@components/common';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservation' element={<Create />} />
          <Route path='reservation/create' element={<Create />} />
          <Route path='reservation/confirm' element={<Confirm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
