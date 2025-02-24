export const CURRENT_YEAR = '2025';
export const START_DATE_COAC = '2025-01-23';
export const END_DATE_COAC = '2025-02-28';

export const ROUTES = {
  HOME: '/',
  GROUPS: '/groups',
  LIVE: '/live',
  GROUP: '/groups/:groupNid',
};

export const LITERALS = {
  Common: {
    Back: '< Atrás',
  },
  Header: `COAC ${CURRENT_YEAR}`,
  Groups: {
    Title: 'Agrupaciones',
    Search: 'Buscar agrupaciones...',
    Select: {
      All: 'Todas las Modalidades',
      Chirigota: 'Chirigota',
      Comparsa: 'Comparsa',
      Cuarteto: 'Cuarteto',
    },
    Videos: 'Vídeos',
    Audios: 'Audios',
  },
  Group: {
    previousYears: 'Otros años fueron:',
    noShow: 'No participaron',
  },
  TabBar: {
    Home: 'Sesiones',
    Groups: 'Agrupaciones',
    Live: 'Directo',
  },
  Live: {
    Title: 'En Directo',
    Radio: 'Radio OC',
    TV: 'TV OC',
    Youtube: 'Youtube',
  },
  GroupDetail: {
    city: 'Localidad:',
    director: 'Dirección:',
    lyrics: 'Letra:',
    music: 'Música:',
  },
  Stages: {
    preliminary: 'Preliminares',
    quarters: 'Cuartos',
    semifinals: 'Semifinales',
    final: 'Final',
  },
};

export const CATEGORIES = {
  All: LITERALS.Groups.Select.All,
  Chirigota: LITERALS.Groups.Select.Chirigota,
  Comparsa: LITERALS.Groups.Select.Comparsa,
  Cuarteto: LITERALS.Groups.Select.Cuarteto,
};

export const STAGES = [
  LITERALS.Stages.preliminary,
  LITERALS.Stages.quarters,
  LITERALS.Stages.semifinals,
  LITERALS.Stages.final,
];

export const QueryKeys = {
  FETCH_GROUPS_BY_DATE: 'FETCH_GROUPS_BY_DATE',
  FETCH_TODAY_GROUPS: 'FETCH_TODAY_GROUPS',
  FETCH_GROUPS: 'FETCH_GROUPS',
  FETCH_DETAIL_GROUP: 'FETCH_DETAIL_GROUP',
};

export const colors = [
  'bg-emerald-300',
  'bg-yellow-300',
  'bg-orange-300',
  'bg-blue-300',
  'bg-rose-300',
  'bg-violet-300',
  'bg-slate-300',
  'bg-pink-300',
];

export const STORED_GROUPS_KEY = `groups-${CURRENT_YEAR}-storage`;
