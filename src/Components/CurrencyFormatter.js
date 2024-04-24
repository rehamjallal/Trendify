import React from 'react';

function CurrencyFormatter({ amount , currency }) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency 
  }).format(amount);

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormatter;
