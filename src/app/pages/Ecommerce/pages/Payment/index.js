import Button from '@material-tailwind/react/Button';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import CardHeader from '@material-tailwind/react/CardHeader';
import H5 from '@material-tailwind/react/Heading5';
import Input from '@material-tailwind/react/Input';
import React, { useState } from 'react';

function PaymentScreen() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const handleName = e => {
    var name = e.target.value
      .replace(/[^a-zA-Z_ ]*/g, '')
      .toUpperCase()
      .slice(0, 30);
    setName(name);
  };
  const handleCvv = e => {
    var num = e.target.value.replace(/[^0-9]*/g, '').slice(0, 3);
    setCvvNumber(num);
  };
  const handleExpiryDate = e => {
    var expiryValue = e.target.value.replace(/[^0-9]*/g, '');
    let newValue = expiryValue.replace(/\D+/g, '');
    if (expiryValue.length >= 3) {
      expiryValue = `${newValue.slice(0, 2)}/${newValue.slice(2, 4)}`;
      console.log(expiryValue);
    }
    setExpiry(expiryValue);
  };
  const handleCardNumber = e => {
    var value = e.target.value.replace(/[^0-9]*/g, '').slice(0, 16);
    console.log(value);
    if (value) {
      var cardNumber = value.match(/.{1,4}/g).join(' ');
      setCardNumber(cardNumber);
    } else {
      setCardNumber(value);
    }
  };

  return (
    <div className='flex justify-center items-center' style={{ height: '86vh' }}>
      <Card className='max-w-md max-h-md'>
        <CardHeader color='brown' size='sm'>
          <H5 color='white'>Pay Invoice</H5>
        </CardHeader>
        <CardBody>
          <div class='grid-cols-2'>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' value={name} onChange={handleName} outline={true} placeholder='Name On Card' />
            </div>
            <div className='mb-8'>
              <Input type='text' color='lightBlue' size='regular' value={cardNumber} onChange={handleCardNumber} outline={true} placeholder='Card Number' />
            </div>
            <div className=' grid grid-cols-2 gap-4'>
              <div>
                <Input type='text' color='lightBlue' size='regular' value={expiry} onChange={handleExpiryDate} outline={true} placeholder='Expiry Date' />
              </div>
              <div>
                <Input type='password' color='lightBlue' size='regular' value={cvvNumber} onChange={handleCvv} outline={true} placeholder='CVV' />
              </div>
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
