import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = (): JSX.Element => (
  <div className="bg-amber-50 min-h-screen">
    <Header />
    <div className="w-full max-w-8/10 p-8 mx-auto">
      <Outlet />
    </div>
  </div>
);

export default Layout;
