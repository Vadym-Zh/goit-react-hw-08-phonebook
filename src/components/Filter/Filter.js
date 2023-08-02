import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlicer/filterSlice';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

export function Filter() {
  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();

  function hendleFilter(event) {
    const { value } = event.target;
    dispatch(setStatusFilter(value));
  }

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filters}
        onChange={hendleFilter}
        className={css.filterInput}
      />
    </label>
  );
}

Filter.prototype = {
  value: PropTypes.string.isRequired,
};
