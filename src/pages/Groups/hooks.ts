import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CURRENT_YEAR, QueryKeys } from '@/constants';
import { getGroupsByYear } from '@/services/coac';
import { GroupCategory, NodeGroups } from '@/types/coac';

export const useFetchGroups = (): UseQueryResult<NodeGroups> =>
  useQuery({
    queryKey: [QueryKeys.FETCH_GROUPS],
    queryFn: () => getGroupsByYear(CURRENT_YEAR),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    select: data => data.nodes.filter(group => group.node.categoria === GroupCategory.Adulto),
  });
