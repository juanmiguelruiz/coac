import { useNavigate } from 'react-router-dom';
import type { CardProps } from './types';

const Card = ({ id, title, type, time, color }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/groups/${id}`);
  };

  return (
    <div
      className={`flex flex-col gap-4 px-4 py-2 rounded-xl border-2 ${color}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start">
        <p className="text-2xl font-bold">{title}</p>
        <p className="px-2 py-1 rounded-xl bg-red-200 text-l font-bold border">{type}</p>
      </div>
      <p className="text-2xl font-bold">{time}</p>
    </div>
  );
};

export default Card;
