export const COURSES = '/topics';
export const PROBLEMS = '/problems';
export const TOPIC_PROBLEMS = '/topics/:topicId/problems';
export const PROBLEM = TOPIC_PROBLEMS + '/:problemId';

export function getTopicProblemsPath(topicId: string) {
  return `${COURSES}/${encodeURIComponent(topicId)}${PROBLEMS}`;
}
