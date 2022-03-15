import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Header = () => {


  const [open, setopen] = useState(false)
  const handleClick = () => setopen(!open)
 
  const links = [
    { 
    id:1,
    name: "HOME",
    link: ''
  },
    { 
    id:2,
    name: "RELEASE",
    link: ''
  },
    { 
    id:3, 
    name: "TEAM",
    link: ''
  },
    {
    id:4, 
    imageSrc: '/images/links/discord.svg',
    imageAlt: "discord",
    link: 'https://discord.com/'
  },
    {
    id:5, 
    imageSrc: '/images/links/etherscan.svg',
    imageAlt: "etherscan",
    link: 'https://etherscan.io/'
  },
    {
    id:6, 
    imageSrc: '/images/links/instagram.svg',
    imageAlt: "instagram",
    link: 'https://instagram.com/'
  },
    {
    id:7, 
    imageSrc: '/images/links/opensea.svg',
    imageAlt: "opensea",
    link: 'https://opensea.io/'
  },
    {
    id:8, 
    imageSrc: '/images/links/twitter.svg',
    imageAlt: "twitter",
    link: 'https://twitter.com'
  },
  ]



 
  return (
        <div className='w-screen h-[80px] z-10000 p-3  fixed'>
           
       <div className='px-5 flex justify-between items-center w-screen h-full'>
       <img src="/images/logo.svg" alt="logo" className="w-8 ml-0" />
        <div className='flex items-center'>
        
            <ul className={`pr-32 bg-[#ffffff14] font-medium backdrop-blur-md md:bg-none  md:pl-10 md:pr-10 md:static fixed duration-0 top-0 md:h-auto h-screen  ${!open ? 'right-[-100%] ' : 'right-0'}`}>
            
                {links.map((link) => (
                  <li key={link.id} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-transparent">
                    <a href={link.link} className='cursor-pointer'>{link.name}<img src={link.imageSrc} alt={link.imageAlt} className=' hover:animate-bounce'/></a>
                   
                    </li>
                )
                )}
                
            </ul>
        </div>
        <div className='md:hidden  fixed right-3 cursor-pointer z-10000 top-6' onClick={handleClick}>
        {!open ? <MenuIcon className='w-6'/> : <XIcon className='w-6'/>}   
        </div>
        </div>
        </div>
        
  );
};

export default Header;