import { NodeGroups } from 'types/coac';

export const filterGroups = ({
  groups,
  searchTerm = '',
  categoryTerm = '',
}: {
  groups: NodeGroups;
  searchTerm?: string;
  categoryTerm?: string;
}) => {
  if (!groups || !Array.isArray(groups)) return [];

  const normalizedSearch = searchTerm.trim().toLowerCase().replace(/\s+/g, ' ');

  return groups.filter(({ node }) => {
    const { titulo, modalidad } = node;
    const normalizedTitle = titulo.trim().toLowerCase();

    const matchesText = !normalizedSearch || normalizedTitle.includes(normalizedSearch);
    const matchesCategory = !categoryTerm || modalidad === categoryTerm;

    return matchesText && matchesCategory;
  });
};
