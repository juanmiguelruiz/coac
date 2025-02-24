import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { colors, QueryKeys } from '@/constants';
import { parseShowData } from '@/utils';
import { getShowsByDate } from 'services/coac';
import { useGroupsStore } from 'store/groupsStore';

const useFetchSession = (): void => {
  const selectedDate = useGroupsStore(state => state.selectedDate);
  const today = new Date(selectedDate ?? new Date());
  const formattedDate = today.toISOString().split('T')[0];
  const shows = useGroupsStore(state => state.shows);
  const updateShows = useGroupsStore(state => state.updateShows);

  const isStoredDate = Object.keys(shows).includes(formattedDate);

  const { data, isSuccess } = useQuery({
    queryKey: [QueryKeys.FETCH_GROUPS_BY_DATE, formattedDate],
    queryFn: () => getShowsByDate(formattedDate),
    select: data => ({ [formattedDate]: parseShowData(data?.agrupaciones, colors) }),
    enabled: !isStoredDate && !!formattedDate,
  });

  useEffect(() => {
    if (isSuccess && !isStoredDate) {
      updateShows(data);
    }
  }, [isSuccess, isStoredDate, data, updateShows]);
};

export default useFetchSession;
