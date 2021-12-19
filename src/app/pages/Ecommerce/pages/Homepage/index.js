import React from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from './Landing';
const Homepage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Landing />
    </>
  );
};

export default Homepage;
