import { setFilter } from 'redux/contacts/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleFilterChange(e) {
    dispatch(setFilter(e.target.value));
  }

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
