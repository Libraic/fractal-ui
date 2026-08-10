import type { GetTopicResponse } from '../types/topic.api.types.ts';
import type { Topic } from '../types/topics.types.ts';

export function fromGetTopicResponseToTopic(getTopicResponse: GetTopicResponse): Topic {
  return {
    id: getTopicResponse.id,
    title: getTopicResponse.title,
    labels: getTopicResponse.labels,
    description: getTopicResponse.description,
    numberOfProblems: getTopicResponse.numberOfProblems,
    numberOfSolvedProblems: getTopicResponse.numberOfSolvedProblems,
    icon: getTopicResponse.icon,
  };
}
