import { useGroupsStore } from 'store/groupsStore';
import Card from './Card';

const Home = () => {
  const todayShows = useGroupsStore(state => state.todayShows);
  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-3xl font-bold">Hoy en el Falla</p>
      <div className="flex gap-2 flex-col justify-center">
        {todayShows?.map(({ id, title, type, time, color }) => (
          <Card key={id} color={color} id={id.toString()} time={time} title={title} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Home;
