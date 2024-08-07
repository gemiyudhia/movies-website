import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SideBar = ({ isOpen, setIsOpen, handleClick, openIndex }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-slate-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between bg-slate-900 p-4">
          <a href="/" className="text-lg font-bold text-white">
            MyMoviesList 🔥
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white"
          >
            &times;
          </button>
        </div>

        {/* Dropdown */}
        <ul className="p-4">
          <li className="py-2 text-white">
            <div className="relative inline-block w-full text-left">
              <button
                onClick={() => handleClick(0)}
                className="flex w-full items-center justify-between text-white"
              >
                Movies
                <span>
                  {openIndex === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === 0 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Now Playing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Top Rated
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Upcoming
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className="py-2 text-white">
            <div className="relative inline-block w-full text-left">
              <button
                onClick={() => handleClick(1)}
                className="flex w-full items-center justify-between text-white"
              >
                Serial Tv
                <span>
                  {openIndex === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === 1 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Airing Today
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      On The Air
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Top Rated
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className="py-2 text-white">
            <div className="relative inline-block w-full text-left">
              <button
                onClick={() => handleClick(2)}
                className="flex w-full items-center justify-between text-white"
              >
                People
                <span>
                  {openIndex === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === 2 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Popular
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
