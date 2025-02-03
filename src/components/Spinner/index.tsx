import { bouncy } from 'ldrs';
bouncy.register();

const Spinner = ({ fullScreen = false }: { fullScreen?: boolean }): JSX.Element => (
  <div
    className={`${fullScreen ? 'w-screen h-screen' : 'w-full h-[calc(100vh-176px)]'} flex justify-center items-center bg-amber-50`}
  >
    <l-bouncy size="60" speed="1.75" color="black"></l-bouncy>
  </div>
);

export default Spinner;
