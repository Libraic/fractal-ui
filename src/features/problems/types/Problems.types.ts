import type { Paragraph, ProblemDifficulty } from './problem.api.types';

export interface ProblemRecord {
  id: string;
  createdAt: string;
  title: string;
  difficulty: ProblemDifficulty;
  prerequisites: string[];
}

export interface ProblemDefinition {
  title?: string;
  paragraphs?: Paragraph[];
}
