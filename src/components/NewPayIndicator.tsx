import React, { FC } from 'react';

type NewPayIndicatorType = {
  pay: string;
}

const NewPayIndicator:FC<NewPayIndicatorType> = ({ pay }) => {
  console.log('123');
  return (
    <div>
      {pay}
    </div>
  );
};

export default NewPayIndicator;
