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
        <option defaultValue value="">
          Sort by
        </option>
        <option defaultValue value={sortStatuses.nameAsc}>
          Name (A-Z)
        </option>
        <option value={sortStatuses.nameDesc}>Name (Z-A)</option>
      </select>
    </div>
  );
}

export default Sort;
