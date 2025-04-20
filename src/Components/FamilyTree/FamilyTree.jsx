import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './familyTree.css';

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0)

  const asset = "Diamond";
  const asset2 = "Gold";
  return (
    <div className='family-tree text-center text-xl font-semibold'>
      <h2 className='text-2xl'>Family Tree</h2>
      <h2 className='text-2xl'>Total Family Money: {money}</h2>
      {/* <Grandpa asset={asset}></Grandpa> */}

      <AssetContext.Provider value={asset2}>
        <MoneyContext value={[money, setMoney]}>
          <Grandpa asset={asset}></Grandpa>
        </MoneyContext>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;