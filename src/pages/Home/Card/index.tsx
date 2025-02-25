import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';
import type { CardProps } from './types';

const Card = ({ id, title, type, time, color }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.GROUP.replace(':groupNid', id));
  };

  return (
    <div
      className={`flex flex-col gap-4 p-4 rounded-xl border-2 max-w-160 ${color}`}
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
