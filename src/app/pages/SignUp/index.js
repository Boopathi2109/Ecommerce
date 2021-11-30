import Button from '@material-tailwind/react/Button';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import CardHeader from '@material-tailwind/react/CardHeader';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  let navigate = useNavigate();

  function handleNavigate() {
    navigate('/eCommerce');
  }

  return (
    <div className='flex h-screen  w-screen items-center justify-center bg-gray-200'>
      <Card className='max-w-md justify-center items-center'>
        <CardHeader color='lightBlue' size='sm'>
          <H5 color='white'>Welcome Back</H5>
        </CardHeader>

        <CardBody>
          <div className='mb-8 px-4'>
            <InputIcon type='name' color='lightBlue' placeholder='Email Address' />
          </div>
          <div className='mb-4 px-4'>
            <InputIcon type='pass' color='lightBlue' placeholder='password' />
          </div>
        </CardBody>
        <CardFooter>
          <div className='flex justify-center'>
            <Button color='lightBlue' buttonType='link' size='lg' ripple='dark' onClick={handleNavigate}>
              Get Started
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
