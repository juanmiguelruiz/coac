import Card from './Card';
import { useFetchTodayGroups } from './hooks';

const Home = () => {
  const { data } = useFetchTodayGroups();

  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-3xl font-bold">Hoy en el Falla</p>
      <div className="flex gap-2 flex-col justify-center">
        {data?.map(({ id, title, type, time, color }) => (
          <Card key={id} title={title} type={type} time={time} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Home;
