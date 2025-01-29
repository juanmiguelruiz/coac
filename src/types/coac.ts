export enum GroupCategory {
  Adulto = 'Adulto',
}

export type Group = {
  agrupaciones: string;
  categoria: GroupCategory;
  descansos: string;
  fase: string;
  fecha: string;
  nid: string;
  titulo: string;
  modalidad: string;
  fotos: string;
};

export type NodeGroups = { node: Group }[];

export interface GroupList {
  nodes: NodeGroups;
}
