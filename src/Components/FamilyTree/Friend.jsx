import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Friend = ({name, asset}) => {
  const asset2 = useContext(AssetContext);

  return (
    <div>
      <h2>Special: {name}</h2>
      <h2>Asset: {asset}</h2>
      <h2>Asset context: {asset2}</h2>
    </div>
  );
};

export default Friend;