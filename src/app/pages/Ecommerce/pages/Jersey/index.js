import React from 'react';
import { useParams } from 'react-router-dom';

function Jersey(params) {
  const { eCommerceJersey } = useParams();

  console.log(eCommerceJersey);
  return <h3>Product Jersey</h3>;
}
export default Jersey;
