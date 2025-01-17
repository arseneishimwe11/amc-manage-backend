export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

export function getPaginationOptions(query: any): PaginationOptions {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.max(1, Math.min(100, parseInt(query.limit) || 10));
  return { page, limit };
}

export function createPaginatedResponse<T>(
  items: T[],
  total: number,
  options: PaginationOptions
): PaginatedResponse<T> {
  const totalPages = Math.ceil(total / options.limit);
  
  return {
    items,
    total,
    currentPage: options.page,
    totalPages,
    hasMore: options.page < totalPages,
  };
}
