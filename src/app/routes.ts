export const COURSES = '/topics';
export const PROBLEMS = '/problems';
export const TOPIC_PROBLEMS = '/topics/:topicId/problems';

export function getTopicProblemsPath(topicId: string) {
  return `/topics/${encodeURIComponent(topicId)}/problems`;
}
