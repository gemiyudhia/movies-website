import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="space-y-3 bg-[#1d1d1d]">
        <div className="container mx-auto mt-20 py-3 pt-9">
          <div className="flex w-full items-center justify-center gap-x-5 px-7 text-2xl">
            <div className="rounded-full bg-white p-1">
              <Link
                to="https://www.instagram.com/yuudhia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="rounded-full bg-white p-1">
              <Link
                to="https://www.linkedin.com/in/gemiyudhia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full bg-white p-1">
              <Link
                to="https://github.com/gemiyudhia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#080808] py-3 text-center text-white">
          <div className="font-thin text-light">
            copyright &copy; 2024; Develop by{" "}
            <span className="font-semibold">Gemi Yudhia</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
