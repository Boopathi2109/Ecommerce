import Button from '@material-tailwind/react/Button';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import CardHeader from '@material-tailwind/react/CardHeader';
import H5 from '@material-tailwind/react/Heading5';
import Input from '@material-tailwind/react/Input';
import React from 'react';

function PaymentScreen() {
  return (
    <div className='flex h-screen  w-screen items-center  justify-center bg-gray-200'>
      <Card className='max-w-md max-h-md '>
        <CardHeader color='brown' size='sm'>
          <H5 color='white'>Pay Invoice</H5>
        </CardHeader>
        <CardBody>
          <div class='grid-cols-2'>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' outline={true} placeholder='Name On Card' />
            </div>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' outline={true} placeholder='Card Number' />
            </div>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' outline={true} placeholder='Expiry Date' />
            </div>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' outline={true} placeholder='CVV' />
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className='flex justify-center'>
            <Button color='lightBlue' buttonType='filled' size='lg' ripple='dark'>
              Pay Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PaymentScreen;
