import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchInput } from 'redux/search/search.selectors';
import { onSearchChange } from 'redux/search/search.actions';
import { filterEmoji } from 'redux/emoji/emoji.actions';

import { SearchInputContainer, Container, Input } from './search-input.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  searchInput: selectSearchInput,
});

const SearchInput = ({ searchInput, onSearchChange, filterEmoji }) => {
  const onChange = e => {
    const input = e.target.value;

    onSearchChange(input);
    filterEmoji(input);
  };

  return (
    <SearchInputContainer>
      <Container>
        <Input type="text" autoComplete="off" value={searchInput} onChange={onChange} />
      </Container>
    </SearchInputContainer>
  );
};

/* -------------------------------------------------------------------------- */

SearchInput.propTypes = {
  searchInput: PropTypes.string,
  onSearchChange: PropTypes.func,
  filterEmoji: PropTypes.func,
};

export default connect(mapStateToProps, { onSearchChange, filterEmoji })(SearchInput);
