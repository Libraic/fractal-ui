import type { SearchFilter } from '../../../shared/api/api.types.ts';

export type ProblemDifficulty = 'Simplu' | 'Mediu' | 'Dificil';

export interface GetProblemResponse {
  id: string;
  title: string;
  difficulty: string;
  prerequisites: string[];
  createdAt: string;
}

export enum BlockType {
  Inline = 'inline',
  Block = 'block',
  Text = 'text',
}

export type Block = {
  type: BlockType;
  content: string;
};

export type Paragraph = {
  blocks: Block[];
};

export type GetProblemByIdResponse = {
  title: string;
  difficulty: string;
  paragraphs: Paragraph[];
};

export type GetRequestParams = {
  page: number;
  size: number;
  sort: string;
  filters?: SearchFilter[];
};
