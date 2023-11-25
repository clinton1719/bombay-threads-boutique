import NavBarCategories from './NavBarCategories';
import useWindowSize from '../../utils/useWindowSize';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

/* This is for displaying the main Navigation Bar
It has logo, search, sign in etc */

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const size = useWindowSize();
  console.log(size);
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-2 py-2">
        {/* Menu Bar for mobile devices */}
        <div className="w-5 md:hidden ml-1">
          <svg
            viewBox="0 0 100 80"
            width="30"
            height="40"
            onClick={() => setShowNav(!showNav)}
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        {/* Magnifying glass for mobile devices */}
        <div className="w-5 md:hidden ml-4">
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.4 490.4"
          >
            <g>
              <path
                d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
              />
            </g>
          </svg>
        </div>
        <div className="ml-2">
          <span>Bombay Threads Boutique</span>
        </div>
        {/* Search bar, search icon and button for larger devices */}
        <div className="hidden md:flex md:items-center relative md:flex-1 ml-32 mr-56 mt-2">
          <svg
            className="w-5 absolute inset-y-0 left-0 fill-white mt-4 ml-2"
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.4 490.4"
          >
            <g>
              <path
                d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
              />
            </g>
          </svg>
          <input
            type="search"
            className=" w-full p-4 ps-10 text-sm text-black shadow-md shadow-black rounded-lg outline outline-white placeholder-black ring-2 ring-white"
            placeholder="Search by item, size, color etc"
            required
          />
          <button className="absolute inset-y-0 right-0">Search</button>
        </div>
        <div className="">
          <div className="">
            <button>Sign In</button>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      {size.width > 720 ? (
        <NavBarCategories />
      ) : showNav ? (
        <NavBarCategories />
      ) : (
        <p>Testing</p>
      )}

      {/* Body of Website */}
      <Outlet />
    </>
  );
};

export default NavBar;
