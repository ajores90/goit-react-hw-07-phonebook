import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterSlice } from 'redux/FilterSlice';
import { FilterContainer, FilterTitle, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <FilterContainer>
      <FilterTitle>Search contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(filterSlice(e.target.value))}
        placeholder="Enter name to search"
      />
    </FilterContainer>
  );
};

export default Filter;
