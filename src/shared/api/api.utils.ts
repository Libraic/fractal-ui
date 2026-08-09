import type { AxiosError } from 'axios';
import type { ApiError, ErrorType, Result } from './api.types';

const UNKNOWN_ERROR = 'An unknown error occurred. Please, try again later';

export const getApiError = <T>(error: unknown): Result<T, ApiError> => {
  const axiosError = error as AxiosError<{
    message: string;
    type: ErrorType;
    errors: Record<string, string>;
  }>;

  return {
    ok: false,
    error: {
      message: axiosError.response?.data?.message || UNKNOWN_ERROR,
      type: axiosError.response?.data?.type || 'GENERAL',
      errors: axiosError.response?.data?.errors,
    },
  };
};
