import { ON_SEARCH_CHANGE } from './search.types';

/* -------------------------------------------------------------------------- */

export const onSearchChange = input => ({
  type: ON_SEARCH_CHANGE,
  payload: input,
});
