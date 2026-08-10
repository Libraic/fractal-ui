export type GetTopicResponse = {
  id: string;
  title: string;
  description: string;
  labels: string[];
  numberOfSolvedProblems: number;
  numberOfProblems: number;
  icon: string;
};