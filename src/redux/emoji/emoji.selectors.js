import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const emojiSelector = state => state.emoji;

export const selectEmojiList = createSelector([emojiSelector], emoji => emoji.emojiList);
