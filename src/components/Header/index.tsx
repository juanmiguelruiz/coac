import { PropsWithChildren } from 'react';
import TabBar from '../TabBar';

const Header = ({
  hideTabBar = false,
}: PropsWithChildren<{ hideTabBar?: boolean }>): JSX.Element => (
  <div className="flex flex-col gap-8 items-center rounded-b-xl justify-center bg-sky-300 py-8">
    <span className="text-5xl font-extrabold  ">COAC 2025</span>
    {!hideTabBar && (
      <div className="flex justify-center">
        <TabBar />
      </div>
    )}
  </div>
);

export default Header;
