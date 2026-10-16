import { PROBLEMS_BASE_URL } from '../../../shared/api/api.endpoints';
import type {
  ApiError,
  ApiResponse,
  GetPaginatedData,
  Result,
} from '../../../shared/api/api.types';
import { getApiError, getOkApiResponse } from '../../../shared/api/api.utils';
import { api } from '../../../shared/api/axios';
import {
  DEFAULT_PAGE,
  DEFAULT_PROBLEM_SORTING_CRITERIA,
  ITEMS_PER_PAGE,
} from '../../../shared/constants/constants';
import type {
  GetProblemByIdResponse,
  GetProblemResponse,
  GetRequestParams,
} from '../types/problem.api.types';

export async function getProblems(
  params?: GetRequestParams,
  problemTitleStartsWith?: string,
): Promise<Result<GetPaginatedData<GetProblemResponse>, ApiError>> {
  const finalParams = params ?? {
    page: DEFAULT_PAGE,
    size: ITEMS_PER_PAGE,
    sort: DEFAULT_PROBLEM_SORTING_CRITERIA,
  };
  const normalizedTitle = problemTitleStartsWith?.trim();
  const filters = params?.filters ? [...params.filters] : [];
  if (normalizedTitle) {
    filters.push({ field: 'title', operation: 'startsWith', value: normalizedTitle });
  }

  try {
    const response = await api.post<GetPaginatedData<GetProblemResponse>>(
      PROBLEMS_BASE_URL,
      { filters },
      { params: finalParams },
    );
    return { ok: true, data: response.data };
  } catch (error: unknown) {
    return getApiError(error);
  }
}

export async function getProblemById(problemId: string): ApiResponse<GetProblemByIdResponse> {
  const endpoint = PROBLEMS_BASE_URL + '/' + encodeURIComponent(problemId);
  try {
    const response = await api.get(endpoint);
    return getOkApiResponse(response.data);
  } catch (error: unknown) {
    return getApiError(error);
  }
}
