import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORED_GROUPS_KEY } from '@/constants';
import type { Group, NodeGroups, Show } from 'types/coac';

interface GroupState {
  groups: NodeGroups;
  todayShows?: Show[];
  updateGroups: (groups: NodeGroups) => void;
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

export const useGroupsStore = create<GroupState>()(
  persist(
    set => ({
      groups: [],
      todayShows: [],
      updateGroups: groups => set({ groups }),
    }),
    {
      name: STORED_GROUPS_KEY,
      partialize: state => ({ groups: state.groups }),
    }
  )
);
