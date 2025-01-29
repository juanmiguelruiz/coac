import { LITERALS } from '@/constants';
import { useGroupsStore } from 'store/groupsStore';
import Card from './Card';

const Groups = (): JSX.Element => {
  const groups = useGroupsStore(state => state.groups);
  return (
    <div className="flex flex-col justify-center gap-16">
      <p className="text-3xl font-bold">{LITERALS.Groups.Title}</p>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2">
        {groups?.map(node => {
          const { nid } = node.node;
          return <Card key={nid} nid={nid} />;
        })}
      </div>
    </div>
  );
};

export default Groups;
