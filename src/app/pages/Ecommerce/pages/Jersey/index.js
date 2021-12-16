import Button from '@material-tailwind/react/Button';
import Card from '@material-tailwind/react/Card';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../../../Json/Jersey.json';

function Jersey(params) {
  const { eCommerceJersey } = useParams();

  let navigate = useNavigate();

  function handleNavigate() {
    navigate('payment');
  }

  return (
    <div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Data.map((ele, i) => {
            return (
              <Card className='mb-5 py-7 shadow-lg'>
                <div key={i}>
                  <p>
                    <img src={`../images/${ele.image}`} />
                  </p>
                  <div className='flex justify-center mt-3'>
                    <Button color='teal' buttonType='filled' size='regular' rounded={true} block={false} iconOnly={false} ripple='light' onClick={() => handleNavigate()}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Jersey;
