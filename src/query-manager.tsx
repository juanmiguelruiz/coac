import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { useFetchGroups, useFetchTodayGroups } from 'hooks';
import { useGroupsStore } from 'store/groupsStore';

const queryClient = new QueryClient();

export const SuspenseFetching = (): null => {
  const { data: todayShowsData } = useFetchTodayGroups();
  const { data: groupsData } = useFetchGroups();
  useGroupsStore.setState({ groups: groupsData, todayShows: todayShowsData });
  return null;
};

export const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider client={queryClient}>
    <SuspenseFetching />
    {children}
  </Provider>
);
