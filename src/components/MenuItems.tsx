import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {

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
return (

    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
        <Close onClick={showMenu} className='cursor-pointer'/>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Release</Link></li>
    <li><Link to='/'>Team</Link></li>
    {links.map((link) => (
        <a href={link.link}><img key={link.id} src={link.imageSrc} alt={link.imageAlt}/></a>
    )
    )}

</ul>
    );
};

export default MenuItems;