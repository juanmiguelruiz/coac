import { useState } from 'react';
import { LITERALS } from '@/constants';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useGroupsStore } from 'store/groupsStore';
import { type NodeGroups } from 'types/coac';
import Card from './Card';

const filterGroups = ({
  groups,
  searchTerm,
  categoryTerm,
}: {
  groups: NodeGroups;
  searchTerm: string;
  categoryTerm: string;
}) => {
  if (!groups) return [];

  const searchTermLower = searchTerm.toLowerCase().trim().replace(/\s+/g, ' ');

  return groups.filter(({ node }) => {
    const fullName = node.titulo.toLowerCase().trim();
    const matchesText = fullName.includes(searchTermLower);
    const matchesCategory = categoryTerm ? node.modalidad === categoryTerm : true;
    return matchesText && matchesCategory;
  });
};

const Groups = (): JSX.Element => {
  const groups = useGroupsStore(state => state.groups);
  const [searchTerm, setSearchTerm] = useState('');
  // const [categoryTerm, setCategoryTerm] = useState('');

  const [visibleCount, setVisibleCount] = useState(3);
  const filteredGroups = filterGroups({ groups, searchTerm, categoryTerm: '' });
  const visibleItems = filteredGroups.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredGroups.length));
  };

  const observerRef = useInfiniteScroll(loadMore, { loading: false });

  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-3xl font-bold">{LITERALS.Groups.Title}</p>
      <div className="flex flex-col sm:flex-row justify-start gap-4">
        <input
          className="bg-white p-3 border rounded-2xl min-w-1/4"
          placeholder="Buscar agrupaciones..."
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Buscar agrupaciones"
        />
        {/* <div className="px-3 py-3 border rounded-2xl bg-white min-w-1/4 flex justify-between items-center">
          <select
            className="appearance-none w-[100% + 64px]"
            onChange={e => setCategoryTerm(e.target.value)}
            aria-label="Filtrar por categoría"
          >
            {Object.values(Categories).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map(({ node }) => (
          <Card key={node.nid} nid={node.nid} />
        ))}
      </div>
      <div ref={observerRef} style={{ height: 1, background: 'transparent' }} />
    </div>
  );
};

export default Groups;
