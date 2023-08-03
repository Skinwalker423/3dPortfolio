import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, artLogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(null);
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
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Art Gonzalez
            <span className='sm:block hidden orange-text-gradient'>
              | Web Dev
            </span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
