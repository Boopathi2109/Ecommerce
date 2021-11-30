import Button from '@material-tailwind/react/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center'>
    <div className='w-9/12 m-auto py-16 min-h-screen flex items-center justify-center'>
      <div className='p-4 '>
        <div className='flex text-8xl font-dark font-bold justify-center'>404</div>
        <p className='text-2xl md:text-3xl font-light leading-normal'>Sorry we couldn't find this page. </p>
        <p className='mb-8'>But dont worry, you can find plenty of other things on our homepage.</p>
        <div className='flex text-8xl font-dark font-bold justify-center'>
          <Link to='/eCommerce'>
            <Button className=' py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700'>back to homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Error404;
