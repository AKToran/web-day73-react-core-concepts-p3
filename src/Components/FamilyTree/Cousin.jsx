import React from 'react';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
  return (
    <div>
      <h2>{name}</h2>
      {name ==="Tom Hiddleston" && <Friend asset={asset} name={"Jerry"}></Friend>}
    </div>
  );
};

export default Cousin;