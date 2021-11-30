import React from 'react';
import { useParams } from 'react-router-dom';

function Shirt(params) {
  const { eCommerceJersey } = useParams();

  console.log(eCommerceJersey);
  return <h3>Product Shirt</h3>;
}
export default Shirt;
