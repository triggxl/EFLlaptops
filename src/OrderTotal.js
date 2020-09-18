import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const OrderTotal = (props) => {
  //adding all items together using reduce
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost, 0
  );
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  )
}

export default OrderTotal;