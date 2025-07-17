// src/app/models/ModuleSession.ts

export interface Instructor {
  username: string;
}

export interface Module {
  title: string;
  instructors: Instructor[];
  // autres propriétés si nécessaire
}

export interface CoBuildSpace {
  name: string;
}

export interface ModuleSession {
  id: number;
  module: Module;
  coBuildSpace?: CoBuildSpace; // ou coBuildSpaceName?: string selon backend
  trancheAgeMin?: number;
  trancheAgeMax?: number;
  capacity?: number; // corrigé de capcity
  date?: string | Date;
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
  annule?: boolean;
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  number: number; // page courante
  // autres champs si besoin (size, totalElements, etc.)
}
