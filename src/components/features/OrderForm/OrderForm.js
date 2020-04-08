import OrderSummary from '../OrderSummary/OrderSummary';
import React from 'react';
//import styles from './OrderForm';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const isValid = (options, tripCost, tripId, tripCountry) => {
  const {name, contact} = options;
  if (name !== '' && contact !== '') {
    sendOrder(options, tripCost, tripId, tripCountry);
  }
  else {window.alert('Fill name and contact fields');}
};

const OrderForm = ({options, tripCost, setOrderOption, tripId, tripCountry}) => (
  
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue = {options[option.id]} setOrderOption ={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
    </Col>
    <Button onClick={() => isValid(options, tripCost, tripId, tripCountry)}>Order now!</Button>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.any,
  formatPrice: PropTypes.func,
  calculateTotal: PropTypes.func,
  tripId: PropTypes.string,
  tripCountry: PropTypes.string,
};

export default OrderForm;