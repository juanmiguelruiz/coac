import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { CURRENT_YEAR, QueryKeys } from '@/constants';
import { getGroupsByYear } from 'services/coac';
import { GroupCategory, type NodeGroup, type NodeGroups } from 'types/coac';

const useFetchGroups = (): UseSuspenseQueryResult<NodeGroups> => {
  // const storedGroups = localStorage.getItem(STORED_GROUPS_KEY);
  // const items = { nodes: storedGroups ? JSON.parse(storedGroups).state.groups : [] };
  return useSuspenseQuery({
    queryKey: [QueryKeys.FETCH_GROUPS],
    queryFn: () => getGroupsByYear(CURRENT_YEAR),
    staleTime: 1000 * 60 * 60,
    // initialData: storedGroups ? items : undefined,
    select: data =>
      data?.nodes?.filter((group: NodeGroup) => group.node.categoria === GroupCategory.Adulto),
  });
};

export default useFetchGroups;
