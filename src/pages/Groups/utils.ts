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
    const { titulo, modalidad, localidad, autorletra, autormusica } = node;
    const normalizedTitle = titulo.trim().toLowerCase();
    const normalizedCity = localidad.trim().toLowerCase();
    const normalizedAuthorLyrics = autorletra.trim().toLowerCase();
    const normalizedAuthorMusic = autormusica.trim().toLowerCase();

    const matchesText =
      !normalizedSearch ||
      normalizedTitle.includes(normalizedSearch) ||
      normalizedAuthorLyrics.includes(normalizedSearch) ||
      normalizedAuthorMusic.includes(normalizedSearch) ||
      normalizedCity.includes(normalizedSearch);

    const matchesCategory = !categoryTerm || modalidad === categoryTerm;
    return matchesText && matchesCategory;
  });
};
