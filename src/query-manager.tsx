import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { useFetchGroups, useFetchTodayGroups } from 'hooks';
import { useGroupsStore } from 'store/groupsStore';

const queryClient = new QueryClient();

export const SuspenseFetching = (): null => {
  const { data: showsData } = useFetchTodayGroups();
  const { data: groupsData } = useFetchGroups();
  useGroupsStore.setState({ groups: groupsData, shows: showsData });
  return null;
};

export const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider client={queryClient}>
    <SuspenseFetching />
    {children}
  </Provider>
);
