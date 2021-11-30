import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../app/pages/Homepage/Homepage';
import Jersey from '../app/pages/MainApp/pages/Jersey/Product_Jersey';
import Shirt from '../app/pages/MainApp/pages/shirt/Product_Shirt';
import Layout from '../Layout';
import Error404 from './pages/Error404';
import SignUp from './pages/SignUp/SignUp';

export default function PrivateRouteNew() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='*' element={<Error404 />} />
        <Route path='eCommerce' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path=':eCommerceJersey' element={<Jersey />} />
          <Route path='shirt' element={<Shirt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
