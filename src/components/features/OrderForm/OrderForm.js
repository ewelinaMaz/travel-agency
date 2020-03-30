import OrderSummary from '../OrderSummary/OrderSummary';
import React from 'react';
//import styles from './OrderForm';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';

const OrderForm = props => (


  
  <Row>
    <Col xs={12}>
      <PageTitle text='Trip options' />
      <OrderSummary cost={props.tripCost} options={props.options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;