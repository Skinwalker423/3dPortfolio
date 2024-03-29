import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, artLogo } from "../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navList = navLinks.map(({ title, id }) => {
    return (
      <li
        key={id}
        className={`hover:text-orange-600 text-[18px] font-medium cursor-pointer ${
          toggle && "font-poppins text-[16px]"
        }`}
        onClick={() => {
          setToggle(false);
        }}
      >
        <a href={`#${id}`}>{title}</a>
      </li>
    );
  });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <NavLink
          to={"/"}
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={artLogo}
            alt='art gonzalez logo'
            width={85}
            height={85}
            className='object-contain'
          />
          <p className='text-white text-[32px] font-bold cursor-pointer flex justify-center items-center gap-2'>
            Art Gonzalez
            <span className='text-[32px] sm:block hidden orange-text-gradient'>
              | Web Dev
            </span>
          </p>
        </NavLink>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navList}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            className='w-[28px] h-[28px]'
            src={toggle ? close : menu}
            alt={
              toggle ? "close icon" : "hamburger menu icon"
            }
            onClick={() => setToggle((bool) => !bool)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex lg:hidden justify-end items-start flex-col gap-5'>
              {navList}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
