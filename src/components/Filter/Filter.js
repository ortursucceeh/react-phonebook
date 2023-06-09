import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter" className="form-label">
          Find contacts by name
        </label>
        <input
          onChange={this.props.handleFilterChange}
          type="text"
          name="filter"
          className="form-control"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
