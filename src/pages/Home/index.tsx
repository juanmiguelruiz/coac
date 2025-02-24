import { END_DATE_COAC, START_DATE_COAC } from '@/constants';
import { selectShowsByDate, useGroupsStore } from 'store/groupsStore';
import Card from './Card';
import DateCarousel from './DateCarousel';
import useFetchGroups from './hooks';

const Home = (): JSX.Element => {
  const updateSelectedDate = useGroupsStore(state => state.updateSelectedDate);
  const showsByDate = selectShowsByDate();
  useFetchGroups();

  const handleDateChange = (date: string) => {
    updateSelectedDate(date);
  };

  return (
    <div className="flex flex-col justify-center gap-8">
      <DateCarousel
        startDate={START_DATE_COAC}
        endDate={END_DATE_COAC}
        onDayPick={handleDateChange}
      />
      <div className="flex gap-2 flex-col">
        {showsByDate?.map(({ id, title, type, time, color }) => (
          <Card key={id} color={color} id={id.toString()} time={time} title={title} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Home;
