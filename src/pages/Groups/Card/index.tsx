import { useNavigate } from 'react-router-dom';
import { GroupDetails } from '@/components';
import { ROUTES } from '@/constants';
import { selectGroupByNid } from '@/store/groupsStore';

const Card = ({ nid }: { nid: string }): JSX.Element | null => {
  const navigate = useNavigate();
  const group = selectGroupByNid(nid);

  if (!group) {
    return null;
  }

  const { autorletra, autormusica, director, fotos, localidad, modalidad, titulo, year } = group;

  const handleClick = () => {
    navigate(ROUTES.GROUP.replace(':groupNid', nid));
  };

  return (
    <div className={`flex flex-col gap-4 px-4 py-2 rounded-xl border-2`} onClick={handleClick}>
      {fotos && <img src={fotos} alt="card" className="rounded-xl" />}
      <div className="flex flex-col justify-between items-start">
        <p className="text-2xl font-bold">{titulo}</p>
        <p>
          {modalidad} ({year})
        </p>
      </div>
      <GroupDetails
        city={localidad}
        director={director}
        lyricsAuthor={autorletra}
        musicAuthor={autormusica}
      />
    </div>
  );
};

export default Card;
