export const COURSES = '/topics';
export const PROBLEMS = '/problems';
export const TOPIC_PROBLEMS = '/topics/:topicId/problems';
export const TOPIC_PROBLEM = TOPIC_PROBLEMS + '/:problemId';
export const PROBLEM = PROBLEMS + '/:problemId';

export function getTopicProblemsPath(topicId: string) {
  return `${COURSES}/${encodeURIComponent(topicId)}${PROBLEMS}`;
}
