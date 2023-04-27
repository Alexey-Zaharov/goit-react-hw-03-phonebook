import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilter, filter }) => {
  return (
    <div className={css.filterContainer}>
      <label>
        Serch
        <input
          className={css.filterInput}
          value={filter}
          type="text"
          name="serch"
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
