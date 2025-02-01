export const getPreviousYears = (data: { [key: string]: string }) => {
  if (!data) return [];
  return Object.entries(data)
    .filter(([key, value]) => key.startsWith('agrupacion') && value.trim() !== '')
    .map(([key, value]) => ({ year: key.replace('agrupacion', ''), value }))
    .reverse();
};

export const getLastSegment = (url: String) => url.substring(url.lastIndexOf('/') + 1);
