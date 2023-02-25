import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

function Header() {
  const [open, setopen] = useState(false);
  return (
    <header className="px-[1.5rem] md:px-0 md:mx-[3rem] lg:mx-[6rem] xxl:mx-auto lg:max-w-[1280px] font-nunito flex my-10 justify-between text-[18px] font-semibold select-none">
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
      <ul className={`lg:flex lg:items-center z-[10] transition-all ease-in duration-500 lg:z-auto lg:static absolute bg-dark lg:space-x-10 space-y-2.5 lg:space-y-0 my-auto lg:opacity-70 hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:opacity-100 hover:[&>*]:cursor-pointer ${ open? (' top-[100px] opacity-100 '): (' top-[-400px] opacity-0 ')} `}>
        <li>Home</li>
        <li>Services</li>
        <li>Our Projects</li>
        <li>About Us</li>
        <li className="lg:hidden px-10 py-3 border rounded-md hover:cursor-pointer hover:duration-500 text-white hover:border-dark hover:bg-white hover:!text-dark">
          Contact Us
        </li>
      </ul>
      <div className={`transition-all ease-in duration-500 px-10 py-3 border text-[16px] rounded-md hover:cursor-pointer hover:duration-500 hover:border-dark hover:bg-white hover:text-dark hidden lg:inline`}>
        Contact us
      </div>
    </header>
  );
}

export default Header;
