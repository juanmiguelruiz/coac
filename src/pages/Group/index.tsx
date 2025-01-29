import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { selectGroupByNid } from 'store/groupsStore';
import type { Group } from 'types/coac';

const Group = () => {
  const { groupNid } = useParams();
  const group = selectGroupByNid(groupNid || '');

  if (!group) {
    return null;
  }

  const { autorletra, autormusica, director, fotos, localidad, modalidad, titulo, year } =
    group as Group;
  return (
    <div className="flex flex-col gap-8 px-4 p-6 ">
      <Link to={ROUTES.GROUPS} className="text-blue-500 underline">
        Atrás
      </Link>
      <div>
        <img src={fotos} alt="card" className="rounded-xl mb-4" />
        <p>{titulo.toUpperCase()} </p>
        <p>
          {modalidad} ({year}){' '}
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

      <div className="flex flex-col gap-2">
        Otros años fueron:
        {Array.from({ length: 15 }).map(
          (_, index) =>
            group[`agrupacion201${index}`] && (
              <div key={index} className="flex gap-2">
                <div className="w-1/2">201{index}</div>
                <div className="w-1/2">{group[`agrupacion201${index}`]}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Group;
