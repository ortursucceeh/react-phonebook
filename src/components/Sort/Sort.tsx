import { setSortStatus } from 'redux/contacts/SortSlice';
import { sortStatuses } from '../../redux/constants';
import { useAppDispatch } from 'hooks/useAppDispatch';

function Sort() {
  const dispatch = useAppDispatch();

  const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    dispatch(setSortStatus(e.target.value));
  };

  return (
    <div>
      <label className="form-label">Sort by</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSortChange}
      >
        <option value="">Sort by</option>
        <option value={sortStatuses.nameAsc}>Name (A-Z)</option>
        <option value={sortStatuses.nameDesc}>Name (Z-A)</option>
      </select>
    </div>
  );
}

export default Sort;
