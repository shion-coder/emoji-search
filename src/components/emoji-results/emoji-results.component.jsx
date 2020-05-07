import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectEmojiList } from 'redux/emoji/emoji.selectors';

import Clipboard from 'clipboard';

import EmojiResultsRow from 'components/emoji-results-row/emoji-results-row.component';

import { EmojiResultsContainer } from './emoji-results.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  emojiList: selectEmojiList,
});

const EmojiResults = ({ emojiList }) => {
  useEffect(() => {
    const clipboard = new Clipboard('.copy-to-clipboard');

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <EmojiResultsContainer>
      {emojiList.map(emoji => (
        <EmojiResultsRow key={emoji.title} title={emoji.title} symbol={emoji.symbol} />
      ))}
    </EmojiResultsContainer>
  );
};

/* -------------------------------------------------------------------------- */

EmojiResults.propTypes = {
  emojiList: PropTypes.array,
};

export default connect(mapStateToProps)(memo(EmojiResults));
