import type { GetRequestParams } from '../../problems/types/problem.api.types.ts';
import type { ApiError, GetPaginatedData, Result } from '../../../shared/api/api.types.ts';
import {
  DEFAULT_PAGE,
  DEFAULT_PROBLEM_SORTING_CRITERIA,
  ITEMS_PER_PAGE,
} from '../../../shared/constants/constants.ts';
import { api } from '../../../shared/api/axios.ts';
import { TOPICS_BASE_URL } from '../../../shared/api/api.endpoints.ts';
import { getApiError } from '../../../shared/api/api.utils.ts';
import type { GetTopicResponse } from '../types/topic.api.types.ts';

export async function getTopics(
  params?: GetRequestParams,
): Promise<Result<GetPaginatedData<GetTopicResponse>, ApiError>> {
  const finalParams = params ?? {
    page: DEFAULT_PAGE,
    size: ITEMS_PER_PAGE,
    sort: DEFAULT_PROBLEM_SORTING_CRITERIA,
  };

  try {
    const response = await api.post<GetPaginatedData<GetTopicResponse>>(TOPICS_BASE_URL, {
      params: finalParams,
    });
    return { ok: true, data: response.data };
  } catch (error: unknown) {
    return getApiError(error);
  }
}
