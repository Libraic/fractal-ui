import type { GetProblemResponse, ProblemDifficulty } from '../types/problem.api.types';
import type { ProblemRecord } from '../types/Problems.types';


export function fromGetProblemResponseToProblemRecord(problem: GetProblemResponse): ProblemRecord {
  return {
    id: problem.id,
    createdAt: problem.createdAt.split('T')[0],
    title: problem.title,
    difficulty: problem.difficulty as ProblemDifficulty,
    prerequisites: problem.prerequisites ?? [],
  };
}
