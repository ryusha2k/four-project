import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = () => {
 
  const links = [
    {
      id: 1,
      imageSrc: '/images/links/discord.svg',
      imageAlt: "discord",
      link: 'https://discord.com/'
    },
    {
            id: 2,
            imageSrc: '/images/links/etherscan.svg',
            imageAlt: "etherscan",
            link: 'https://etherscan.io/'
          },
          {
            id: 3,
            imageSrc: '/images/links/instagram.svg',
            imageAlt: "instagram",
            link: 'https://instagram.com/'
          },
          {
            id: 4,
            imageSrc: '/images/links/opensea.svg',
            imageAlt: "opensea",
            link: 'https://opensea.io/'
          },
          {
            id: 5,
            imageSrc: '/images/links/twitter.svg',
            imageAlt: "twitter",
            link: 'https://twitter.com'
          },
  ]

  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }

  return (
    <div className='w-full absolute lg:flex items-center p-5 flex justify-between'>
        <span className='text-4xl font-extrabold uppercase  select-none'>Logo</span>

        <nav>
        <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>
          
            <ul className='hidden lg:flex gap-7 uppercase p-2 font-medium'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Release</Link></li>
                <li><Link to='/'>Team</Link></li>
                {links.map((link) => (
                    <a href={link.link}><img key={link.id} src={link.imageSrc} alt={link.imageAlt}/></a>
                )
                )}
                
                <MenuItems showMenu={showMenu} active={active}/>
            
            </ul>

        </nav>

        

    </div>
  );
};

export default Header;