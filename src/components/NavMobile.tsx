import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const NavMobile = () => {
  return (
    <ul className={'flex-col fixed inset-0 left-1/4 flex items-center justify-center gap-10 uppercase bg-stone-50/10 backdrop-blur-md z-10000'}>
    <Close className='cursor-pointer'/>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Release</Link></li>
    <li><Link to='/'>Team</Link></li>
</ul>
  );
};

export default NavMobile;