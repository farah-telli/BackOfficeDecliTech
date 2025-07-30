export interface Feedback {
  id: number;
  content: string;
  rating: number;
  submittedAt: string;
  parentId?: number;
  parentName?: string;
  moduleId?: number;
  moduleName?: string;
  reservationId?: number;
  childName?: string;
}
