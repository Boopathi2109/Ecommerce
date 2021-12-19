import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../../../../Json/Landing.json';
import './caro.css';
const Landing = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`t-shirt`);
  }
  return (
    <div class='col-sm-12'>
      <div className='carousel relative container mx-auto' style={{ maxWidth: '1600px', marginBottom: '10px' }}>
        <div className='carousel-inner relative overflow-hidden w-full'>
          <input className='carousel-open' type='radio' id='carousel-1' name='carousel' aria-hidden='true' hidden='true' checked='checked' />
          <div className='carousel-item absolute opacity-0' style={{ height: '80vh' }}>
            <div className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right' style={{ backgroundImage: `url('https://www.nalli.com/media/pagewidgetblocks/Anandhiya_HomeBanner_Desktop.jpg')` }}>
              <div className='container mx-auto'>
                <div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
                  {/* <p className='text-black text-2xl my-4'>Stripy Zig Zag Jigsaw Pillow and Duvet Set</p> */}
                  <a className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black' onClick={() => handleClick()} href=''>
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label for='carousel-3' className='prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto'>
            ‹
          </label>
          <label for='carousel-2' className='next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto'>
            ›
          </label>

          <input className='carousel-open' type='radio' id='carousel-2' name='carousel' aria-hidden='true' hidden='true' />
          <div className='carousel-item absolute opacity-0 bg-cover bg-right' style={{ height: '80vh' }}>
            <div className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right' style={{ backgroundImage: `url('https://www.nalli.com/media/wysiwyg/Kanmani/Kanmani_home-Banner_Desktop.jpg')` }}>
              <div className='container mx-auto'>
                <div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
                  <a className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black' onClick={() => handleClick()} href=''>
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label for='carousel-1' className='prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto'>
            ‹
          </label>
          <label for='carousel-3' className='next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto'>
            ›
          </label>

          <input className='carousel-open' type='radio' id='carousel-3' name='carousel' aria-hidden='true' hidden='true' />
          <div className='carousel-item absolute opacity-0' style={{ height: '80vh' }}>
            <div className='block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom' style={{ backgroundImage: `url('https://www.nalli.com/media/pagewidgetblocks/Home-Banner_Desk_Tara.jpg')` }}>
              <div className='container mx-auto'>
                <div className='flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide'>
                  {/* <p className='text-black text-2xl my-4'>Brown and blue hardbound book</p> */}
                  <a className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black' onClick={() => handleClick()} href=''>
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label for='carousel-2' className='prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto'>
            ‹
          </label>
          <label for='carousel-1' className='next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto'>
            ›
          </label>

          <ol className='carousel-indicators'>
            <li className='inline-block mr-3'>
              <label for='carousel-1' className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'>
                •
              </label>
            </li>
            <li className='inline-block mr-3'>
              <label for='carousel-2' className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'>
                •
              </label>
            </li>
            <li className='inline-block mr-3'>
              <label for='carousel-3' className='carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900'>
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
      <div className='container mx-auto mb-3 ml-3'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Data.map((ele, i) => {
            return (
              <div key={i}>
                <div class='max-w-sm rounded overflow-hidden shadow-lg'>
                  <img class='w-full' src={`../Landing/${ele.image}`} alt='Sunset in the mountains' />
                  <div class='px-6 py-4'>
                    <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
                    <p class='text-gray-700 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                  </div>
                  <div class='px-6 pt-4 pb-2'>
                    <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
                    <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#travel</span>
                    <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
