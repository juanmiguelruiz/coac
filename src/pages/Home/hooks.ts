import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { colors, QueryKeys } from '@/constants';
import { getTodayGroups } from 'services/coac';
import { Show } from './types';

export const parseShowData = (input: string, colors: string[]): Show[] =>
  input?.split('||').map((entry, index) => {
    const [id, title, type, time] = entry?.split('::');
    return {
      id: parseInt(id, 10),
      title: title.replace(/"/g, '').trim(),
      type: type.trim(),
      time: time.trim(),
      color: colors[index],
    };
  });

export const useFetchTodayGroups = (): UseQueryResult<Show[]> =>
  useQuery({
    queryKey: [QueryKeys.FETCH_TODAY_GROUPS],
    queryFn: getTodayGroups,
    select: data => parseShowData(data.agrupaciones, colors),
  });
