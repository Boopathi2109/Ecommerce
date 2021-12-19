import Button from '@material-tailwind/react/Button';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../../../Json/Jersey.json';

function Jersey(params) {
  const { eCommerceJersey } = useParams();
  const [isClick, setClick] = useState(false);
  let navigate = useNavigate();

  function handleNavigate(img) {
    // navigate('card');
    navigate('card', {
      state: img,
    });
  }

  return (
    <div className='container mx-auto '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {Data.map((ele, i) => {
          return (
            <div key={i}>
              <div class='max-w-sm rounded overflow-hidden shadow-lg mb-3'>
                {ele.Date >= '16/12/2021' && <span className='absolute animate-bounce font-medium bg-transparent bg-green-300'>25% Offer</span>}

                <img src={`../saree/${ele.image}`} class=' h-96 w-96' />
                <div class='px-6 py-4'>
                  <div class='grid grid-cols-2 gap-4  text-xl mb-2'>
                    <div>{ele.name}</div>
                    <div className='flex justify-end'>{ele.Amount}</div>
                  </div>
                  <Button color='lightBlue' buttonType='filled' size='sm' rounded={true} block={false} iconOnly={false} ripple='light' onClick={() => handleNavigate(ele.image)}>
                    Buy Now
                  </Button>
                  {/* <p class='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Jersey;
