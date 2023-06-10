import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter" className="form-label">
        Find contacts by name
      </label>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        className="form-control"
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
