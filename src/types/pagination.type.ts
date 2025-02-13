export type Pagination<T> = {
  Items: T[];
  TotalItems: number;
  PageNumber: number;
  PageSize: number;
  TotalPages: number;
};
