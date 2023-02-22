import * as React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home, NotFound, Reservations } from '@pages'
import { Footer, Nav } from '@components/common'

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
        parent route paths, and nested route elements render inside
        parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservations' element={<Reservations />} />

          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
      <Nav />

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
      <Outlet />
      <Footer />
    </div>
  )
}
