import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dimensionsReducer } from 'redux/dimensions/dimensions.reducer';
import { themeReducer } from 'redux/theme/theme.reducer';
import { searchReducer } from 'redux/search/search.reducer';
import { emojiReducer } from 'redux/emoji/emoji.reducer';

/* -------------------------------------------------------------------------- */

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['theme'],
};

const reducer = combineReducers({
  dimensions: dimensionsReducer,
  theme: themeReducer,
  search: searchReducer,
  emoji: emojiReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
