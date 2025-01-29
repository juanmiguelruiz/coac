import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { colors, QueryKeys } from '@/constants';
import { getTodayGroups } from 'services/coac';
import { type Show } from 'types/coac';

const parseShowData = (input: string, colors: string[]): Show[] =>
  input?.split('||').map((entry, index) => {
    const [id, title, type, time] = entry?.split('::');
    return {
      id: id.trim(),
      title: title.replace(/"/g, '').trim(),
      type: type.trim(),
      time: time.trim(),
      color: colors[index],
    };
  });

const useFetchTodayGroups = (): UseSuspenseQueryResult<Show[]> =>
  useSuspenseQuery({
    queryKey: [QueryKeys.FETCH_TODAY_GROUPS],
    queryFn: getTodayGroups,
    select: data => parseShowData(data.agrupaciones, colors),
    staleTime: 1000 * 60 * 60,
  });

export default useFetchTodayGroups;
