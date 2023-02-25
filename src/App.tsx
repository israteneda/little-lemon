import * as React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { BookReservation, ConfirmReservation, Home, NotFound } from '@pages'
import { Footer, Nav } from '@components/common'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservations' element={<BookReservation />} />
          <Route path='reservations/book' element={<BookReservation />} />
          <Route path='reservations/confirm' element={<ConfirmReservation />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
