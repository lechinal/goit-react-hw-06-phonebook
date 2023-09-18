import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <label>Find contacts by name</label>
      <input
        className={styles.inputFilter}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
