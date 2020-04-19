import {parseOptionPrice} from './parseOptionPrice';

export const promoPrice = (regularPrice, discount) => {
  let price = parseOptionPrice(regularPrice).value;
  if(price == null || 
    price <= 0 ||
    discount < 0 ||
    isNaN(price) ||
    isNaN(discount)) {
    return null;
  } else {
    return `$${(price - (price * (discount/100)).toFixed(2))}`;
  }
};