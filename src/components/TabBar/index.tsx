import { LITERALS, ROUTES } from '@/constants';
import Link from './Link';

const TabBar = (): JSX.Element => (
  <div className="flex w-fit border-2 rounded-full p-1 bg-stone-200">
    <Link to={ROUTES.HOME} label={LITERALS.TabBar.Home} />
    <Link to={ROUTES.GROUPS} label={LITERALS.TabBar.Groups} />
    <Link to={ROUTES.LIVE} label={LITERALS.TabBar.Live} />
  </div>
);

export default TabBar;
