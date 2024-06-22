export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSort = (sortKey, sortOrder) => ({
  type: SET_SORT,
  payload: { sortKey, sortOrder },
});
