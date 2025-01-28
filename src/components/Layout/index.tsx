import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <div className="w-screen max-w-xl p-8 bg-amber-50">
      <Outlet />
    </div>
  </>
);

export default Layout;
