import { Group, GroupList } from '@/types/coac';

const BASE_URL = 'https://contenidos.ondacadiz.es/';

export const getTodayGroups = async (): Promise<Group> => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const API_URL = `${BASE_URL}app_carnaval_sesiones/adulto/${formattedDate}`;

  const response = fetch(API_URL);
  return response.then(response => response.json()).then(response => response.nodes[0].node);
};

export const getGroupsByYear = async (year: string): Promise<GroupList> => {
  const response = fetch(`${BASE_URL}app_carnaval_fichas/${year}`);
  return response.then(response => response.json());
};
