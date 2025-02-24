import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { colors, QueryKeys } from '@/constants';
import { parseShowData } from '@/utils';
import { getShowsByDate } from 'services/coac';
import { type Show } from 'types/coac';

const useFetchTodayGroups = (): UseSuspenseQueryResult<{ [key: string]: Show[] }> => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  return useSuspenseQuery({
    queryKey: [QueryKeys.FETCH_TODAY_GROUPS],
    queryFn: () => getShowsByDate(formattedDate),
    select: data => ({ [formattedDate]: parseShowData(data.agrupaciones, colors) }),
    staleTime: 1000 * 60 * 60,
  });
};

export default useFetchTodayGroups;
