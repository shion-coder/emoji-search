import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { EmojiResultRowContainer, Image, Title, Info } from './emoji-results-row.styles';

/* -------------------------------------------------------------------------- */

const EmojiReultsRow = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <EmojiResultRowContainer className="copy-to-clipboard" data-clipboard-text={symbol}>
      <Image alt={title} src={src} />
      <Title className="title">{title}</Title>
      <Info className="info">Click to copy emoji</Info>
    </EmojiResultRowContainer>
  );
};

/* -------------------------------------------------------------------------- */

EmojiReultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default memo(EmojiReultsRow);
