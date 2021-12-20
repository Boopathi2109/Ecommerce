import Button from '@material-tailwind/react/Button';
import Textarea from '@material-tailwind/react/Textarea';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from './gold.jpg';

function CardItems(params) {
  const { eCommerceJersey } = useParams();
  const [isClick, setClick] = useState(false);
  const [price, SetIsPrice] = useState('1200');
  const [quanVal, SetIsQuanVal] = useState('1');
  let navigate = useNavigate();
  // const { state } = useLocation();
  // console.log(state);
  function handleNavigate() {
    navigate('payment');
  }
  function changePrice(e) {
    var quantity = e.target.value;
    SetIsQuanVal(quantity);
    SetIsPrice((price / quanVal) * quantity);
  }

  return (
    <div className='flex items-center justify-center mt-10'>
      <div className=' rounded overflow-hidden shadow-lg h-auto  '>
        <div className='grid md:grid-cols-2'>
          <div>
            <img src={logo} style={{ height: '460px' }} />
          </div>
          <div className='ml-3'>
            <div class='flex '>
              <div class='mb-3 mr-2 xl:w-96'>
                <text style={{ fontWeight: 'bold' }}>Quantity</text>
                <br />
                <br />
                <select
                  class='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out
      m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  aria-label='Default select example'
                  onChange={e => changePrice(e)}>
                  <option selected value='1'>
                    1
                  </option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
                <br />
                <br />
                Price :<text style={{ fontWeight: 'bold', justifyContent: 'end' }}>₹{price}</text>
              </div>
            </div>
            <br />
            <div className='flex mr-2'>
              <Textarea color='lightBlue' size='regular' outline={true} placeholder='Address' />
            </div>
            <br />
            <Button color='lightBlue' buttonType='filled' size='sm' rounded={true} block={false} iconOnly={false} onClick={() => handleNavigate()}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItems;
