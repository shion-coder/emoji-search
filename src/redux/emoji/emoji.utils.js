import emojiList from 'utils/emoji-list.json';

/* -------------------------------------------------------------------------- */

export const filterEmoji = (searchText, maxResults) =>
  emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      if (emoji.keywords.includes(searchText)) {
        return true;
      }

      return false;
    })
    .slice(0, maxResults);
