import React from "react";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden order-1 flex">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`hamburger-line trasnsition duration-300 ${
            isOpen && `origin-top-left rotate-45`
          }`}
        ></span>
        <span
          className={`hamburger-line trasnsition duration-300 ${
            isOpen && `scale-0`
          }`}
        ></span>
        <span
          className={`hamburger-line trasnsition duration-300 ${
            isOpen && `origin-bottom-left -rotate-45`
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
