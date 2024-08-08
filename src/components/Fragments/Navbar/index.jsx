import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Hamburger from "@/components/ui/hamburger";
import SideBar from "../SideBar";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 45) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={`container sticky left-0 right-0 top-0 z-20 mx-auto py-6 ${colorChange ? "bg-[#1d1d1d]" : "bg-transparent"} transition duration-150 ease-in-out`}
      >
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center">
            {/* Logo */}
            <Link
              to="/"
              className={`font-poppins order-3 ml-4 flex text-xl font-bold text-slate-800 md:order-1 md:text-2xl ${colorChange ? "text-white" : ""}`}
            >
              MyMovieList <span className="inline-flex">🔥</span>
            </Link>

            {/* Hamburger Menu */}
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Menubar */}
            <div className="ml-5 hidden md:order-2 md:block">
              <Menubar className="bg-transparent">
                <MenubarMenu>
                  <MenubarTrigger className="font-poppins cursor-pointer font-semibold text-slate-800">
                    <p
                      className={`${colorChange ? "text-white" : ""} hover:text-opacity-85`}
                    >
                      Movie
                    </p>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="cursor-pointer hover:bg-transparent">
                      <Link to="/movie-popular">Popular</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/movie-now-playing">Now Playing</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/movie-top-rated">Top Rated</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/movie-up-coming">Up Coming</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className="font-poppins cursor-pointer font-semibold text-slate-800">
                    <p
                      className={`${colorChange ? "text-white" : ""} hover:text-opacity-85`}
                    >
                      TV
                    </p>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/tv-airing">Airing Today</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/tv-on-the-air">On The Air</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/tv-popular">Popular</Link>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/tv-top-rated">Top Rated</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className="font-poppins cursor-pointer font-semibold text-slate-800">
                    <p
                      className={`${colorChange ? "text-white" : ""} hover:text-opacity-85`}
                    >
                      People
                    </p>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="cursor-pointer">
                      <Link to="/people-popular">Popular</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>

          {/* Search Bar */}
          <SearchForm />
        </div>
      </nav>

      {/* Sidebar */}
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClick={toggleDropdown}
        openIndex={openIndex}
      />
    </>
  );
};

export default Navbar;
