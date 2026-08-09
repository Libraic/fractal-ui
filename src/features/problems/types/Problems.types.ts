import type { ProblemDifficulty } from './problem.api.types';

export interface ProblemRecord {
  id: string;
  createdAt: string;
  title: string;
  difficulty: ProblemDifficulty;
  prerequisites: string[];
}
