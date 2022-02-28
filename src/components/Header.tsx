
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  let [open, setopen] = useState(false)
 
  const links = [
    { name: "HOME" },
    { name: "RELEASE" },
    { name: "TEAM" },
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
        <img src={open ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
        <img src="/images/logo.svg" alt="logo" className="w-10 ml-7" />
        <nav className=' items-center'>

            <ul className={` bg-[#ffffff14] font-medium backdrop-blur-md md:bg-none  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen  ${!open ? 'right-[-100%] ' : 'right-0'}`}>
           
                {links.map((link) => (
                  <li   className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-transparent hover:border-white duration-300">
                    <a>{link.name}<img key={link.id} src={link.imageSrc} alt={link.imageAlt}/></a>
                    </li>
                )
                )}
            </ul>

        </nav>

        </div>
  );
};

export default Header;