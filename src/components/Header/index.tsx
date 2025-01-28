import { PropsWithChildren } from 'react';
import TabBar from '../TabBar';

const Header = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="flex flex-col gap-8 items-center rounded-b-xl justify-center bg-sky-300 py-8">
    <span className="text-5xl font-extrabold  ">COAC 2025</span>
    <div className="flex justify-center">
      <TabBar />
    </div>
    {children}
  </div>
);

export default Header;
