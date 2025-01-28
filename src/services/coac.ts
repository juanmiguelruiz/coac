import { TodayGroups } from './types';

export const getTodayGroups = async (): Promise<TodayGroups> => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const API_URL = `https://contenidos.ondacadiz.es/app_carnaval_sesiones/adulto/${formattedDate}`;

  const response = fetch(API_URL);
  return response.then(response => response.json()).then(response => response.nodes[0].node);
};
