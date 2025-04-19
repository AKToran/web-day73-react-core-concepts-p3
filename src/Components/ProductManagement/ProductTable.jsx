import React from 'react';

const ProductTable = ({products}) => {
  

  return (
    <div>
      <h3 className='text-3xl'>Products: {products.length}</h3>

      <table>
        <thead>
          <tr>
            <th className='px-3'>No</th>
            <th className='px-3'>Product</th>
            <th className='px-3'>Price</th>
            <th className='px-3'>Quantity</th>
            <th className='px-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => <tr key={index}>
              <td className='px-3'>{index + 1}</td>
              <td className='px-3'>{product.name}</td>
              <td className='px-3'>{product.price}</td>
              <td className='px-3'>{product.quantity}</td>
              <td className='px-3'>Delete</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;