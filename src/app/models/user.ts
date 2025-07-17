export interface Module {
  id: number;
  title: string;
  jour: string;
}

export interface CoBuildSpace {
  spaceId: number;
  name: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  module: Module[];
  coBuildSpace: CoBuildSpace;
}
