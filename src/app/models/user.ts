export interface Module {
  id: number;
  title: string;
  jour: string;
}

export interface CoBuildSpace {
  spaceId: number;
  name: string;
}

// src/app/models/user.model.ts
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  enabled: boolean;
  fullName: string;
}
