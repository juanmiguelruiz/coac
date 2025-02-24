import { END_DATE_COAC, LITERALS, START_DATE_COAC } from '@/constants';
import { useGroupsStore } from 'store/groupsStore';
import Card from './Card';
import DateCarousel from './DateCarousel';
import useFetchSession from './hooks';

const Home = (): JSX.Element => {
  const updateSelectedDate = useGroupsStore(state => state.updateSelectedDate);
  const selectShowsByDate = useGroupsStore(state => state.selectShowsByDate);
  const showsByDate = selectShowsByDate();
  useFetchSession();

  const handleDateChange = (date: string) => {
    updateSelectedDate(date);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <DateCarousel
        startDate={START_DATE_COAC}
        endDate={END_DATE_COAC}
        onDayPick={handleDateChange}
      />
      <div className="flex gap-2 flex-col">
        {showsByDate ? (
          showsByDate.map(({ id, title, type, time, color }) => (
            <Card key={id} color={color} id={id.toString()} time={time} title={title} type={type} />
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-center text-sm">{LITERALS.Home.NoSession}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
