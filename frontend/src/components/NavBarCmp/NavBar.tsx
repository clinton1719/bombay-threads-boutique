import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useWindowSize from '../../utils/useWindowSize';
import NavBarCategories from './NavBarCategories';
import SearchBar from './SearchBar';
import Footer from '../FooterCmp/Footer';

/* This is for displaying the main Navigation Bar
It has logo, search, sign in etc */

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const size: { width: number; height: number } = useWindowSize();
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-2 py-2">
        {/* Menu Bar for mobile devices */}
        <div className={`${showNav && 'animate-pulse'} w-5 md:hidden ml-1`}>
          <svg
            viewBox="0 0 100 80"
            width="30"
            height="40"
            onClick={() => {
              setOpenSearchBar(false);
              setShowNav(!showNav);
            }}
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        {/* Magnifying glass for mobile devices */}
        <div className="w-5 ml-2 md:hidden">
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.4 490.4"
            onClick={() => {
              setShowNav(false);
              setOpenSearchBar(!openSearchBar);
            }}
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
        <NavLink className="ml-2" to={'/'}>
          <span>G.Dezignz</span>
        </NavLink>
        {/* Search bar, search icon and button for larger devices */}
        {size.width > 720 ? (
          <SearchBar openSearchBar={openSearchBar} />
        ) : openSearchBar ? (
          <SearchBar openSearchBar={openSearchBar} />
        ) : null}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="md:mr-5"
        >
          <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
        </svg>

        <div className="">
          <button className="btn-primary">Sign In</button>
        </div>
      </nav>

      {/* Categories Bar */}
      {size.width > 720 ? (
        <NavBarCategories setShowNav={setShowNav} />
      ) : showNav ? (
        <NavBarCategories setShowNav={setShowNav} />
      ) : null}

      {/* Body of Website */}
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
