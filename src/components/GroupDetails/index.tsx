import { LITERALS } from '@/constants';
import { GroupDetailProps } from './types';

const GroupDetails = ({
  city,
  director,
  lyricsAuthor,
  musicAuthor,
}: GroupDetailProps): JSX.Element => (
  <div>
    <p>
      {LITERALS.GroupDetail.city} <span className="poppins">{city}</span>
    </p>
    {director && (
      <p>
        {LITERALS.GroupDetail.director} <span className="poppins">{director}</span>
      </p>
    )}
    {lyricsAuthor && (
      <p>
        {LITERALS.GroupDetail.lyrics} <span className="poppins">{lyricsAuthor}</span>
      </p>
    )}
    {musicAuthor && (
      <p>
        {LITERALS.GroupDetail.music} <span className="poppins">{musicAuthor}</span>
      </p>
    )}
  </div>
);

export default GroupDetails;
