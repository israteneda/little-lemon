import { Routes, Route, Outlet } from 'react-router-dom';
import { Create, Home, NotFound } from '@pages';
import { Footer, Nav } from '@components/common';
import { useTables } from './hooks';

export default function App() {
  const [state, dispatch] = useTables();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reservation' element={<Create state={state} dispatch={dispatch} />} />
          <Route path='reservation/create' element={<Create state={state} dispatch={dispatch} />} />
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
