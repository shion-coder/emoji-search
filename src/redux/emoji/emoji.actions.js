import { FILTER_EMOJI } from './emoji.types';

/* -------------------------------------------------------------------------- */

export const filterEmoji = input => ({
  type: FILTER_EMOJI,
  payload: input,
});
