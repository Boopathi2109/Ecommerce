import H3 from '@material-tailwind/react/Heading5';
import logo from '../assets/logo_1.png';

function Header() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 bg-gray-300 '>
      <div className='flex  px-4'>
        <img width={40} src={logo} />
      </div>
      <div className='flex px-4 justify-center'>
        <H3>CR7 Store</H3>
      </div>
      <div className='flex  px-4 justify-end'>
        <img width={40} src={logo} />
      </div>
    </div>
  );
}

export default Header;
