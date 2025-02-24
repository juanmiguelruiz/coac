import { Show } from 'types/coac';

export const parseShowData = (input: string, colors: string[]): Show[] =>
  input?.split('||').map((entry, index) => {
    const [id, title, type, time] = entry?.split('::');
    return {
      id: id.trim(),
      title: title.replace(/"/g, '').trim(),
      type: type.trim(),
      time: time.trim(),
      color: colors[index],
    };
  });
