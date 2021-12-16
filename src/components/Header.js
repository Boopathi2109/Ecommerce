import H3 from '@material-tailwind/react/Heading5';
import logo from '../assets/logo_1.png';

function Header() {
  return (
    <div className=' md:grid grid-cols-3 bg-green-300  h-16 flex items-center '>
      <div className='flex justify-start '>
        <img width={40} src={logo} />
      </div>
      <div className='flex justify-center '>
        <H3>CR7 cristiano Ronaldo</H3>
      </div>
      <div className='flex justify-end '>
        <img width={40} height={40} src={logo} />
      </div>
    </div>
  );
}

export default Header;
