import { PROBLEMS_BASE_URL } from '../../../shared/api/api.endpoints';
import type {
  ApiError,
  GetPaginatedData,
  Result,
  SearchCriteria,
} from '../../../shared/api/api.types';
import { getApiError } from '../../../shared/api/api.utils';
import { api } from '../../../shared/api/axios';
import {
  DEFAULT_PAGE,
  DEFAULT_PROBLEM_SORTING_CRITERIA,
  ITEMS_PER_PAGE,
} from '../../../shared/constants/constants';
import type { GetProblemResponse, GetProblemsRequest } from '../types/problem.api.types';

export async function getProblems(
  params?: GetProblemsRequest,
  problemTitleStartsWith?: string,
): Promise<Result<GetPaginatedData<GetProblemResponse>, ApiError>> {
  const finalParams = params ?? {
    page: DEFAULT_PAGE,
    size: ITEMS_PER_PAGE,
    sort: DEFAULT_PROBLEM_SORTING_CRITERIA,
  };
  const normalizedTitle = problemTitleStartsWith?.trim();
  const searchCriteria: SearchCriteria = normalizedTitle
    ? { filters: [{ field: 'title', operation: 'startsWith', value: normalizedTitle }] }
    : {};

  try {
    const response = await api.post<GetPaginatedData<GetProblemResponse>>(
      PROBLEMS_BASE_URL,
      searchCriteria,
      { params: finalParams },
    );
    return { ok: true, data: response.data };
  } catch (error: unknown) {
    return getApiError(error);
  }
}
