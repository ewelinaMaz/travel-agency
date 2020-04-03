import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue, currentValue}) => (

  <div>
    <input required
      type='text'
      className={styles.input}
      value = {currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)} />

  </div>

);
OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};
export default OrderOptionText;