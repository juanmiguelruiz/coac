import { matchPath, useLocation } from 'react-router-dom';
import { LITERALS, ROUTES } from '@/constants';
import TabBar from '../TabBar';

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const match = matchPath(ROUTES.GROUP, pathname);
  const hideTabBar = !!match;
  return (
    <div className="flex flex-col gap-8 items-center rounded-b-xl justify-center bg-sky-300 py-8">
      <span className="text-5xl font-extrabold">{LITERALS.Header}</span>
      {!hideTabBar && (
        <div className="flex justify-center">
          <TabBar />
        </div>
      )}
    </div>
  );
};

export default Header;
