import { useNavigate } from 'react-router-dom';
import { selectGroupByNid } from '@/store/groupsStore';

const Card = ({ nid }: { nid: string }): JSX.Element | null => {
  const navigate = useNavigate();
  const group = selectGroupByNid(nid);

  if (!group) {
    return null;
  }

  const { autorletra, autormusica, director, fotos, localidad, modalidad, titulo, year } = group;

  const handleClick = () => {
    navigate(`/groups/${nid}`);
  };

  return (
    <div className={`flex flex-col gap-4 px-4 py-2 rounded-xl border-2 `} onClick={handleClick}>
      {fotos && <img src={fotos} alt="card" className="rounded-xl" />}
      <div className="flex flex-col justify-between items-start">
        <p className="text-2xl font-bold">{titulo}</p>
        <p>
          {modalidad} ({year})
        </p>
      </div>
      <div>
        <p>
          Localidad: <span className="poppins">{localidad}</span>
        </p>
        {director && (
          <p>
            Dirección: <span className="poppins">{director}</span>
          </p>
        )}
        {autorletra && (
          <p>
            Letra: <span className="poppins">{autorletra}</span>
          </p>
        )}
        {autormusica && (
          <p>
            Música: <span className="poppins">{autormusica}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
