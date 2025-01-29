import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { Layout } from 'components';
import { Groups, Home, Live } from 'pages';
import Group from './pages/Group';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GROUPS} element={<Groups />} />
        <Route path={ROUTES.LIVE} element={<Live />} />
      </Route>
      <Route path={ROUTES.GROUP} element={<Group />} />
    </Routes>
  </BrowserRouter>
);
