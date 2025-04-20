import React from 'react';
import Friend from './Friend';

const Myself = ({asset}) => {
  return (
    <div>
      <h2>Myself</h2>
      <Friend asset={asset} name={"One"}></Friend>
    </div>
  );
};

export default Myself;