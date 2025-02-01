export enum GroupCategory {
  Adulto = 'Adulto',
}

export type Group = {
  agrupaciones: string;
  autorletra: string;
  autormusica: string;
  categoria: GroupCategory;
  descansos: string;
  director: string;
  fase: string;
  fecha: string;
  fotos: string;
  modalidad: string;
  nid: string;
  localidad: string;
  titulo: string;
  year: string;
  agrupacion2024: string;
  slug: string;
  [key: string]: string;
};

export type NodeGroup = { node: Group };

export type NodeGroups = NodeGroup[];

export interface GroupList {
  nodes: NodeGroups;
}

export interface Show {
  id: string;
  title: string;
  type: string;
  time: string;
  color: string;
}

export type DetailGroup = {
  node: {
    audio: string;
    foto_original: string;
    link: string;
    nid: string;
  };
};
