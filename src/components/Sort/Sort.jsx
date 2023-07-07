import { useDispatch } from 'react-redux';
import { setSortStatus } from 'redux/SortSlice';
import { sortStatuses } from '../../redux/constants';

function Sort() {
  const dispatch = useDispatch();

  function handleSortChange(e) {
    dispatch(setSortStatus(e.target.value));
  }

  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSortChange}
      >
        <option defaultValue value={sortStatuses.createdAt}>
          Sort by
        </option>
        <option value={sortStatuses.name}>Name</option>
        <option value={sortStatuses.createdAt}>Creation date</option>
      </select>
    </div>
  );
}

export default Sort;
