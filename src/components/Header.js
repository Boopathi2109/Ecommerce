import H3 from '@material-tailwind/react/Heading5';
import logo from '../assets/111.jpg';
import logoIcon from '../assets/whatsapp.png';
function Header() {
  return (
    <div className=' md:grid md:grid-cols-3 grid grid-cols-3 bg-white mb-5  h-16  flex items-center '>
      <div className='flex justify-start '>
        <img width={180} src={logo} />
      </div>
      <div className='flex justify-center '>
        <H3>Lucifier</H3>
      </div>
      <div className='flex justify-end '>
        <a target='_blank' href='https://api.whatsapp.com/send?phone=919894130402&forceIntent=true&load=loadInIOSExternalSafari'>
          <img width={40} height={40} src={logoIcon} />
        </a>
      </div>
    </div>
  );
}

export default Header;
