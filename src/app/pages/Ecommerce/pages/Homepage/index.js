import Button from '@material-tailwind/react/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`t-shirt`);
  }
  function handleClickShirt() {
    navigate(`shirt`);
  }

  return (
    <>
      <Button color='lightBlue' buttonType='link' size='lg' ripple='dark' onClick={() => handleClick()}>
        Jersey Screen
      </Button>
      <Button color='yellow' buttonType='link' size='lg' ripple='dark' onClick={() => handleClickShirt()}>
        Shirt Screen
      </Button>
    </>
  );
};

export default Homepage;
