import { useState } from 'react';
import { CATEGORIES, LITERALS } from '@/constants';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useGroupsStore } from 'store/groupsStore';
import Card from './Card';
import { filterGroups } from './utils';

const INITIAL_GROUPS = 6;

const Groups = (): JSX.Element => {
  const groups = useGroupsStore(state => state.groups);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTerm, setCategoryTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_GROUPS);
  const filteredGroups = filterGroups({ groups, searchTerm, categoryTerm });
  const visibleItems = filteredGroups.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + INITIAL_GROUPS, filteredGroups.length));
  };

  const observerRef = useInfiniteScroll(loadMore, { loading: false });

  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-3xl font-bold">{LITERALS.Groups.Title}</p>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <input
          className="bg-white px-4 py-2 border rounded-2xl w-full"
          placeholder={LITERALS.Groups.Search}
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-2xl bg-white appearance-none w-full"
          onChange={e => setCategoryTerm(e.target.value)}
        >
          {Object.values(CATEGORIES).map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map(({ node }) => (
          <Card key={node.nid} nid={node.nid} />
        ))}
      </div>
      <div ref={observerRef} className="h-1 bg-transparent" />
    </div>
  );
};

export default Groups;
