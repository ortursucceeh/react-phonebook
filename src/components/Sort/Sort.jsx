import { useDispatch } from 'react-redux';
import { setSortStatus } from 'redux/contacts/SortSlice';
import { sortStatuses } from '../../redux/constants';

function Sort() {
  const dispatch = useDispatch();

  function handleSortChange(e) {
    dispatch(setSortStatus(e.target.value));
  }

  return (
    <div>
      <label className="form-label">Sort by</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSortChange}
      >
        <option defaultValue value={sortStatuses.createdAt}>
          Creation date (recent first)
        </option>
        <option value={sortStatuses.name}>Name (A-Z)</option>
      </select>
    </div>
  );
}

export default Sort;
