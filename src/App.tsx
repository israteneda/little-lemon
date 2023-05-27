import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { CreateReservation, ConfirmReservation, Home, NotFound } from '@pages';
import { Footer, Nav } from '@components/common';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservation' element={<CreateReservation />} />
          <Route path='reservation/create' element={<CreateReservation />} />
          <Route path='reservation/confirm' element={<ConfirmReservation />} />
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
