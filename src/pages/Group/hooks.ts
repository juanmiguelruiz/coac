import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { getDetailGroup } from 'services/coac';
import type { DetailGroup } from 'types/coac';

export const useFetchGroups = (slugName: string): UseQueryResult<DetailGroup[]> =>
  useQuery({
    queryKey: [QueryKeys.FETCH_DETAIL_GROUP],
    queryFn: () => getDetailGroup(slugName),
    enabled: !!slugName,
  });
