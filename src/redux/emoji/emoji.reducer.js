import { createReducer } from 'redux/create-reducer';

import { FILTER_EMOJI } from './emoji.types';
import { filterEmoji } from './emoji.utils';

/* -------------------------------------------------------------------------- */

const initialState = { emojiList: filterEmoji('', 20) };

const reducer = {
  [FILTER_EMOJI]: (state, payload) => ({ ...state, emojiList: filterEmoji(payload, 20) }),
};

export const emojiReducer = createReducer(initialState, reducer);
