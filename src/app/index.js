import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Ecommerce';
import Homepage from './pages/Ecommerce/pages/Homepage';
import Jersey from './pages/Ecommerce/pages/Jersey';
import PaymentScreen from './pages/Ecommerce/pages/Payment';
import Shirt from './pages/Ecommerce/pages/Shirt';
import Error404 from './pages/Error404';
import SignUp from './pages/SignUp';

export default function PrivateRouteNew() {
  return (
    <div className='bg-gray-200 '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='eCommerce' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path=':eCommerceJersey' element={<Jersey />} />
            <Route path='shirt' element={<Shirt />} />
            <Route path=':eCommerceJersey/payment' element={<PaymentScreen />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
