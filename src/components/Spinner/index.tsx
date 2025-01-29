import { bouncy } from 'ldrs';
bouncy.register();

const Spinner = (): JSX.Element => (
  <div className="w-screen h-screen flex justify-center items-center bg-amber-50">
    <l-bouncy size="60" speed="1.75" color="#73D4FF"></l-bouncy>
  </div>
);

export default Spinner;
