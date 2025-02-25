import type { DetailGroup, Group, GroupList } from 'types/coac';

const BASE_URL = 'https://contenidos.ondacadiz.es/';

export const getShowsByDate = async (date: string): Promise<Group> => {
  const API_URL = `${BASE_URL}app_carnaval_sesiones/adulto/${date}`;

  const response = fetch(API_URL);
  return response.then(response => response.json()).then(response => response.nodes[0].node);
};

export const getGroupsByYear = async (year: string): Promise<GroupList> => {
  const response = fetch(`${BASE_URL}app_carnaval_fichas/${year}`);
  return response.then(response => response.json());
};

export const getDetailGroup = async (slugName: string): Promise<DetailGroup[]> => {
  const response = fetch(`${BASE_URL}app_carnaval_contenidos_detalle_ficha_slug/${slugName}`);
  return response.then(response => response.json()).then(response => response.nodes);
};
