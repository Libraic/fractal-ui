export interface ApiError {
  message: string;
  type: ErrorType;
  errors?: Record<string, string>;
}

export type ErrorType = 'VALIDATION' | 'GENERAL' | 'SYSTEM';

export type Result<T, E> = { ok: true; data: T } | { ok: false; error: E };

export type ApiResponse<T> = Promise<Result<T, ApiError>>;

export type SearchFilterOperation = 'equals' | 'startsWith';

export type SearchFilter = {
  field: string;
  operation: SearchFilterOperation;
  value: string;
};

export type SearchCriteria = {
  filters?: SearchFilter[];
};

export interface GetPaginatedData<T> {
  content: T[];
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
