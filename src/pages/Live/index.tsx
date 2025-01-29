import { LITERALS } from '@/constants';

const Radio_URL = 'https://carnaval.ondacadiz.es/canal/76899';
const TV_URL = 'https://carnaval.ondacadiz.es/canal/76897';
const Youtube_URL = 'https://www.youtube.com/@ONDACADIZCARNAVAL';

const Live = (): JSX.Element => (
  <div className="@container flex flex-col gap-16 h-[calc(100dvh_-_256px)]">
    <p className="text-3xl font-bold">{LITERALS.Live.Title}</p>
    <div className="grid grid-cols-3 @max-sm:grid-cols-1 gap-4">
      <a
        className="flex items-center justify-center bg-green-300 border-2 rounded-3xl p-8 text-xl text-center"
        href={Radio_URL}
      >
        {LITERALS.Live.Radio}
      </a>
      <a
        className="flex items-center justify-center bg-purple-300 border-2 rounded-3xl text-xl p-8 text-center"
        href={TV_URL}
      >
        {LITERALS.Live.TV}
      </a>
      <a
        className="flex items-center justify-center bg-red-300 border-2 rounded-3xl text-xl p-8 text-center"
        href={Youtube_URL}
        target="_blank"
      >
        {LITERALS.Live.Youtube}
      </a>
    </div>
  </div>
);

export default Live;
