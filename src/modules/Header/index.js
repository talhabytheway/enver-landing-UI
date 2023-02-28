import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [open, setopen] = useState(false);
  return (
    <header
      className={`bg-dark backdrop-blur-[13px] sticky top-0 md:backdrop-blur-sm z-10 ${
        open ? "bg-opacity-100 lg:bg-opacity-40" : "bg-opacity-40"
      }`}
    >
      <div
        className={`xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1440px] font-nunito flex py-5 justify-between text-[18px] font-semibold select-none transition-all ease-linear duration-650`}
      >
        <img
          src={logo}
          alt="Enver"
          className="h-8 md:h-9 lg:h-10 my-auto hover:cursor-pointer "
        />
        <span
          className={`cursor-pointer lg:hidden block transition-all ease-in duration-500 `}
          onClick={() => setopen(!open)}
        >
          <img src={open ? close : menu} alt="" className="w-10" />
        </span>
        <ul
          className={`block absolute px-[1.5rem] md:px-[3rem] lg:flex align-right lg:items-center !z-[100] transition-all ease-in duration-500 w-[100vw] left-[0] lg:w-auto lg:z-auto lg:static  lg:bg-none  lg:space-x-10 space-y-2.5 lg:space-y-0 my-auto lg:opacity-70 p-3 lg:mb-auto hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:opacity-100 hover:[&>*]:cursor-pointer ${
            open
              ? " top-[80px] opacity-100 bg-dark lg:bg-transparent"
              : " top-[-300px] opacity-0"
          } `}
        >
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="projects"
            >
              Our Projects
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              to="about"
            >
              About Us
            </Link>
          </li>
          <li className="lg:hidden px-10 py-3 inline-block border rounded-md hover:cursor-pointer hover:duration-500 text-white hover:border-dark hover:bg-white hover:!text-dark">
            Contact Us
          </li>
        </ul>
        <div
          className={`transition-all ease-in duration-500 px-10 py-3 border text-[16px] rounded-md hover:cursor-pointer hover:duration-500 hover:border-dark hover:bg-white hover:text-dark hidden lg:inline`}
        >
          Contact us
        </div>
      </div>
    </header>
  );
}

export default Header;
