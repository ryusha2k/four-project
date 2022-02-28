
import React from 'react';
import { Link } from 'react-router-dom';

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

 
  return (
    <div className='w-full absolute lg:flex items-center p-5 flex justify-between'>
        <span className='text-4xl font-extrabold uppercase  select-none'>Logo</span>

        <nav>
    
          
            <ul className='hidden lg:flex gap-7 uppercase p-2 font-medium'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Release</Link></li>
                <li><Link to='/'>Team</Link></li>
                {links.map((link) => (
                    <a href={link.link}><img key={link.id} src={link.imageSrc} alt={link.imageAlt}/></a>
                )
                )}
            </ul>

        </nav>

        

    </div>
  );
};

export default Header;