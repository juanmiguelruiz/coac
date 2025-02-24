import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORED_GROUPS_KEY } from '@/constants';
import type { Group, NodeGroups, Show, Shows } from 'types/coac';

interface GroupState {
  groups: NodeGroups;
  shows: Shows;
  selectedDate: string;
  updateGroups: (groups: NodeGroups) => void;
  updateShows: (newShows: Shows) => void;
  updateSelectedDate: (date: string) => void;
}

export const selectGroupByNid = (nid: string): Group | undefined => {
  const { groups } = useGroupsStore.getState();
  return groups.find(group => group.node.nid === nid)?.node;
};

export const selectSlugName = (nid: string): string | undefined => {
  const group = selectGroupByNid(nid);
  const slug = group?.slug;
  return slug?.substring(slug.lastIndexOf('/') + 1);
};

export const selectShowsByDate = (): Show[] => {
  const { shows, selectedDate } = useGroupsStore.getState();
  return shows[selectedDate];
};

export const useGroupsStore = create<GroupState>()(
  persist(
    (set, get) => ({
      groups: [],
      shows: {},
      selectedDate: new Date().toISOString().split('T')[0],
      updateGroups: groups => set({ groups }),
      updateShows: newShows => {
        const shows = get().shows;
        set({ shows: { ...shows, ...newShows } });
      },
      updateSelectedDate: date => set({ selectedDate: date }),
    }),
    {
      name: STORED_GROUPS_KEY,
      partialize: state => ({ groups: state.groups, shows: state.shows }),
    }
  )
);
