export const CURRENT_YEAR = '2025';

export const ROUTES = {
  HOME: '/',
  GROUPS: '/groups',
  LIVE: '/live',
  GROUP: '/groups/:groupNid',
};

export const LITERALS = {
  Header: `COAC ${CURRENT_YEAR}`,
  Home: 'Hoy en el falla',
  Groups: {
    Title: 'Agrupaciones',
    Select: {
      All: 'Todas las Modalidades',
      Chirigota: 'Chirigota',
      Comparsa: 'Comparsa',
      Cuarteto: 'Cuarteto',
    },
  },
  TabBar: {
    Home: 'Hoy',
    Groups: 'Agrupaciones',
    Live: 'En Directo',
  },
  Live: {
    Title: 'En Directo',
    Radio: 'Radio OC',
    TV: 'TV OC',
    Youtube: 'Youtube',
  },
};

export const QueryKeys = {
  FETCH_TODAY_GROUPS: 'FETCH_TODAY_GROUPS',
  FETCH_GROUPS: 'FETCH_GROUPS',
  FETCH_DETAIL_GROUP: 'FETCH_DETAIL_GROUP',
};

export const colors = [
  'bg-emerald-300',
  'bg-yellow-300',
  'bg-orange-300',
  'bg-blue-300',
  'bg-violet-300',
  'bg-slate-300',
  'bg-pink-300',
];
