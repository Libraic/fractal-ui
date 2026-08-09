import { useEffect, useState } from 'react';
import type { ApiError, GetPaginatedData, Result } from '../../../api/api.types';

export function usePagination<ApiModel, ClientModel>(
  fetchFn: () => Promise<Result<GetPaginatedData<ApiModel>, ApiError>>,
  mappingFn: (item: ApiModel) => ClientModel,
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState<ClientModel[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function fetchData() {
      setIsLoading(true);
      const result = await fetchFn();
      if (!isActive) return;

      if (result.ok) {
        setData(result.data.content.map(mappingFn));
        setTotalItems(result.data.totalElements);
        setTotalPages(Math.max(1, result.data.totalPages));
        setError(null);
      } else {
        setError(result.error);
        setData([]);
      }
      setIsLoading(false);
    }

    void fetchData();
    return () => {
      isActive = false;
    };
  }, [currentPage]);

  return { data, currentPage, totalItems, totalPages, error, isLoading, setCurrentPage };
}
