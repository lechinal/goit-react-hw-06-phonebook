import React from 'react';
import styles from './Paper.module.css';
import PropTypes from 'prop-types';

export default function Paper({ children }) {
  return <div className={styles.paper}>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};
