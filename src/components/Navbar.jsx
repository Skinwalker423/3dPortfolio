import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, artLogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  const navList = navLinks.map(({ title, id }) => {
    return (
      <li
        key={id}
        className={`${
          active === id ? "text-orange-500" : "text-white"
        } hover:text-orange-500 text-[18px] font-medium cursor-pointer ${
          toggle && "font-poppins text-[16px]"
        }`}
        onClick={() => {
          setActive(id);
          setToggle(false);
        }}
      >
        <Link to={`/#${id}`}>{title}</Link>
      </li>
    );
  });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={"/"}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='art gonzalez logo'
            width={65}
            height={65}
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex justify-center items-center gap-2'>
            Art Gonzalez
            <span className='sm:block hidden orange-text-gradient'>
              | Web Dev
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navList}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
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
            <ul className='list-none flex sm:hidden justify-end items-start flex-col gap-5'>
              {navList}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
