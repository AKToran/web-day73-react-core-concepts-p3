import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './familyTree.css';

export const AssetContext = createContext("");

const FamilyTree = () => {
  const asset = "Diamond";
  return (
    <div className='family-tree text-center text-xl font-semibold'>
      <h2 className='text-2xl'>Family Tree</h2>
      <Grandpa asset={asset}></Grandpa>
    </div>
  );
};

export default FamilyTree;