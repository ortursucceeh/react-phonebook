import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter" className="form-label">
          Find contacts by name
        </label>
        <input
          onChange={this.props.onChange}
          type="text"
          name="filter"
          className="form-control"
        />
      </div>
    );
  }
}

export default Filter;
