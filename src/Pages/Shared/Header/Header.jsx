import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
          <img className='mx-auto' src={logo} alt="logo image"/>
          <h3 className='py-3'>Journalism Without Fear or Favour</h3>
          <h3 className='text-2xl'>{moment().format("dddd, MMMM D, YYYY")}</h3>
          
        </div>
    );
};

export default Header;