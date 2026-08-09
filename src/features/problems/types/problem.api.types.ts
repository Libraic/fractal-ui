export type ProblemDifficulty = 'Simplu' | 'Mediu' | 'Dificil';

export interface GetProblemResponse {
  id: string;
  title: string;
  difficulty: string;
  prerequisites: string[];
  createdAt: string;
}

export type GetProblemsRequest = {
  page: number;
  size: number;
  sort: string;
};
