import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { CURRENT_YEAR, QueryKeys } from '@/constants';
import { getGroupsByYear } from 'services/coac';
import { GroupCategory, type NodeGroups } from 'types/coac';

const useFetchGroups = (): UseSuspenseQueryResult<NodeGroups> =>
  useSuspenseQuery({
    queryKey: [QueryKeys.FETCH_GROUPS],
    queryFn: () => getGroupsByYear(CURRENT_YEAR),
    staleTime: 1000 * 60 * 60,
    select: data => data.nodes.filter(group => group.node.categoria === GroupCategory.Adulto),
  });

export default useFetchGroups;
