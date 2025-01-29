import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = (): JSX.Element => (
  <div className="bg-amber-50 ">
    <Header />
    <div className="w-screen max-w-xl p-8 mx-auto">
      <Outlet />
    </div>
  </div>
);

export default Layout;
