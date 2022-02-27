import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
  return (
    <div className='w-full absolute lg:flex items-center p-4 flex justify-between'>
        <span className='text-4xl font-extrabold uppercase  select-none'>Logo</span>

        <nav>
            <ul className='hidden lg:flex gap-5 uppercase p-6 font-medium'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Release</Link></li>
                <li><Link to='/'>Team</Link></li>
            </ul>

        </nav>

        <div className='lg:hidden scale-150'>
        <MenuOutlined onClick={showMenu} className='cursor-pointer'/>
        </div>

    </div>
  );
};

export default Header;