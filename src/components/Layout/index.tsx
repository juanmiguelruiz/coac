import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = (): JSX.Element => (
  <div className="bg-amber-50 min-h-screen">
    <Header />
    <div className="w-full p-4 md:max-w-8/10 md:p-8 mx-auto">
      <Outlet />
    </div>
  </div>
);

export default Layout;
