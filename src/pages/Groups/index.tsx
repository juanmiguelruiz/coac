import Card from '../Home/Card';
import { useFetchGroups } from './hooks';

const Groups = (): JSX.Element => {
  const { data } = useFetchGroups();
  return (
    <div className="flex flex-col justify-center gap-16">
      <p className="text-3xl font-bold">Groups</p>
      {data?.map(node => {
        const { nid, titulo, modalidad, fotos } = node.node;
        return <Card key={nid} title={titulo} image={fotos} type={modalidad} color={'color'} />;
      })}
    </div>
  );
};

export default Groups;
