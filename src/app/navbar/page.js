"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { GiCaveman } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io';

export default function Navbar() {
  const [activeIcon, setActiveIcon] = useState('Home');

  useEffect(() => {
    // Code to run when the component mounts (initial load)
    // For the first time, we will set the active icon to 'Home'
    setActiveIcon('Home');
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const handleClick = (title) => {
    setActiveIcon(title === activeIcon ? '' : title);
  };

  const navBar = [
    { title: 'Home', icon: <GoHome />, link: '/' },
    { title: 'About', icon: <BsFillPersonFill />, link: '/about' },
    { title: 'Experience', icon: <GiCaveman />, link: '/experience' },
    { title: 'Projects', icon: <AiOutlineFundProjectionScreen />, link: '/projects' },
    { title: 'Contact', icon: <IoIosContact />, link: '/contact' },
  ];

  return (
    <>
      <section className='fixed bottom-0 bg-gray-900 p-4 w-[100%] lg:w-20 lg:h-[35%] lg:bg-black lg:space-y-5 lg:bottom-[30%] lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <ul className='flex justify-evenly items-center lg:w-[100%] lg:h-[100%] lg:space-y-6 lg:flex lg:flex-col lg:justify-evenly lg:items-center'>
          {navBar.map((item, ind) => {
            const isActive = item.title === activeIcon;
            return (
              <Link key={ind} href={item.link}
                
                  onClick={() => handleClick(item.title)}
                  className={`p-2 border-2 ${isActive ? 'border-white' : 'border-slate-600'} rounded-full font-semibold text-xl cursor-pointer`}
                  title={item.title}
                >
                  {item.icon}
                
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
}
