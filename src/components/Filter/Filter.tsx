import { setFilter } from 'redux/contacts/FilterSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import React from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

function Filter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter" className="form-label">
        Find contacts by name
      </label>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
        className="form-control"
      />
    </div>
  );
}

export default Filter;
