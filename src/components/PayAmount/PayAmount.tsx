import React, { FC } from 'react';

type NewPayIndicatorType = {
  pay: string;
}

const PayAmount:FC<NewPayIndicatorType> = ({ pay }) => (
  <div>
    {pay}
  </div>
);

export default PayAmount;
