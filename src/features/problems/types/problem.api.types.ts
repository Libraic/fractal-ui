import type { SearchFilter } from '../../../shared/api/api.types.ts';

export type ProblemDifficulty = 'Simplu' | 'Mediu' | 'Dificil';

export interface GetProblemResponse {
  id: string;
  title: string;
  difficulty: string;
  prerequisites: string[];
  createdAt: string;
}

export type GetRequestParams = {
  page: number;
  size: number;
  sort: string;
  filters?: SearchFilter[];
};
