import { Link, useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'components';
import { selectGroupByNid, selectSlugName } from 'store/groupsStore';
import type { DetailGroup, Group } from 'types/coac';
import { useFetchGroups } from './hooks';
import { getLastSegment, getPreviousYears } from './utils';

const Group = () => {
  const { groupNid } = useParams();
  const navigate = useNavigate();
  const group = selectGroupByNid(groupNid || '');
  const slugName = selectSlugName(groupNid || '');
  const { data, isLoading } = useFetchGroups(slugName || '');
  const previousYears = getPreviousYears(group as Group);
  const details = data as DetailGroup[];

  if (isLoading || !group) {
    return <Spinner />;
  }

  const { autorletra, autormusica, director, fotos, localidad, modalidad, titulo, year } =
    group as Group;

  return (
    <>
      <div className="flex flex-col gap-8 px-4 p-6 bg-amber-50 @container min-h-[calc(100dvh-4rem)] :">
        <Link
          to="#"
          onClick={e => {
            e.preventDefault();
            navigate(-1);
          }}
          className="relative py-1 font-semibold rounded-md group"
        >
          <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-black transition-all group-hover:w-16 group-hover:left-0"></span>
          {`< Atrás`}
        </Link>
        <div className="flex flex-col md:flex-row gap-4 bg-amber-200 p-4 rounded-2xl border-2">
          <img
            src={fotos}
            alt="card"
            className="rounded-xl mb-4 md:w-1/2 border max-w-120 aspect-video"
          />
          <div className="flex flex-col gap-4 md:w-1/2">
            <div>
              <p>{titulo.toUpperCase()} </p>
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
        </div>
        {details.length > 0 && (
          <div className="flex flex-col gap-16 p-4 bg-purple-200 rounded-2xl border-2 ">
            <div className="flex flex-col gap-8">
              Videos
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {details?.map((detail: DetailGroup) => (
                  <div className="flex flex-col gap-2">
                    <iframe
                      className="rounded-xl w-full max-w-120 aspect-video"
                      src={`https://www.youtube.com/embed/${getLastSegment(detail?.node?.link)}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                    ></iframe>
                    <p className="poppins text-sm text-center">Preliminares</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              Audios
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {details.map((detail: DetailGroup) => (
                  <div className="flex flex-col gap-2">
                    <audio src={detail?.node?.audio} controls />
                    <p className="poppins text-sm text-center">Preliminares</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 rounded-2xl border-2 p-4 bg-rose-200">
          Otros años fueron:
          {previousYears.map(show => (
            <div key={show.year} className="flex gap-2">
              <div className="w-1/2">{show.year}</div>
              <div className="w-1/2">{show.value}</div>
            </div>
          ))}
          {previousYears.length <= 0 && (
            <div className="w-full flex justify-center">No participaron</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Group;
