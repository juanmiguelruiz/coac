import { Link, useNavigate, useParams } from 'react-router-dom';
import { LITERALS, STAGES } from '@/constants';
import { GroupDetails, Spinner } from 'components';
import { selectGroupByNid, selectSlugName } from 'store/groupsStore';
import type { DetailGroup, Group } from 'types/coac';
import { useFetchGroups } from './hooks';
import { getLastSegment, getPreviousYears } from './utils';
import '@justinribeiro/lite-youtube';

const Group = (): JSX.Element => {
  const navigate = useNavigate();
  const { groupNid } = useParams();
  const group = selectGroupByNid(groupNid || '');
  const slugName = selectSlugName(groupNid || '');
  const { data: details, isLoading } = useFetchGroups(slugName || '');
  const previousYears = getPreviousYears(group as Group);

  if (isLoading || !group) {
    return <Spinner />;
  }

  const { autorletra, autormusica, director, fotos, localidad, modalidad, titulo, year } =
    group as Group;

  const goBack: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col gap-8 px-4 p-6 bg-amber-50 @container min-h-[calc(100dvh-4rem)] :">
        <Link to="#" onClick={goBack} className="relative py-1 font-semibold rounded-md group">
          <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-black transition-all group-hover:w-16 group-hover:left-0"></span>
          {LITERALS.Common.Back}
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
            <GroupDetails
              city={localidad}
              director={director}
              lyricsAuthor={autorletra}
              musicAuthor={autormusica}
            />
          </div>
        </div>
        {details && details.length > 0 && (
          <div className="flex flex-col gap-16 p-4 bg-purple-200 rounded-2xl border-2 ">
            <div className="flex flex-col gap-8">
              {LITERALS.Groups.Videos}
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {details?.map((detail: DetailGroup, index) => (
                  <div key={detail.node.nid} className="flex flex-col gap-2 w-full md:w-1/3">
                    <lite-youtube videoid={getLastSegment(detail?.node?.link)} />
                    <p className="poppins text-sm text-center">{STAGES[index]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {LITERALS.Groups.Audios}
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {details.map((detail: DetailGroup, index) => (
                  <div key={detail.node.nid} className="flex flex-col gap-2">
                    <audio src={detail?.node?.audio} controls />
                    <p className="poppins text-sm text-center">{STAGES[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 rounded-2xl border-2 p-4 bg-rose-200">
          {LITERALS.Group.previousYears}
          {previousYears.map(show => (
            <div key={show.year} className="flex gap-2">
              <div className="w-1/2">{show.year}</div>
              <div className="w-1/2">{show.value}</div>
            </div>
          ))}
          {previousYears.length <= 0 && (
            <div className="w-full flex justify-center">{LITERALS.Group.noShow}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Group;
