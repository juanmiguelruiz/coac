import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = (): JSX.Element => (
  <div className="bg-amber-50 min-h-screen">
    <Header />
    <div className="p-8 flex justify-center">
      <Outlet />
    </div>
  </div>
);

export default Layout;
