import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import {
  SearchFormStyled,
  SearchFormButton,
  SearchFormInput,
  ButtonLabel,
} from './SearchForm.styled';

export const SearchForm = ({ onFormSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleСhange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') return;

    onFormSubmit(searchQuery.toLowerCase().trim());

    setSearchQuery('');
  };

  return (
    <SearchFormStyled autoComplete="off" onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="searchValue"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleСhange}
      />
      <SearchFormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
        <SearchIcon width="20" height="20" />
      </SearchFormButton>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
