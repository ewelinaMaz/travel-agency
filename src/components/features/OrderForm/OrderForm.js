import OrderSummary from '../OrderSummary/OrderSummary';
import React from 'react';
//import styles from './OrderForm';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';

const OrderForm = (cost) => (


  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={cost} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  cost: PropTypes.number,
};

export default OrderForm;