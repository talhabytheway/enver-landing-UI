import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center m-7">
      <img src={logo} alt="" className="h-8 md:h-9 lg:h-10 mx-auto lg:mx-0 hover:cursor-pointer w-auto mb-4 md:mb-0" />
      <div className="max-w-[600px] min-w-[80%] md:min-w-[70%] lg:min-w-[350px] xl:min-w-[400px] self-center text-center flex sm:flex-row flex-col justify-between opacity-70 lg:mb-auto hover:[&>*]:text-blue hover:[&>*]:duration-500 hover:[&>*]:opacity-100 hover:[&>*]:cursor-pointer my-auto [&>*]:my-4 md:[&>*]:my-7 lg:[&>*]:my-10">
        <span>
          Support
        </span>
        <span>
          Privacy Policy
        </span>
        <span>
          Terms and Condition
        </span>
      </div>
      <div className="text-center mt-4 md:mt-0">© 2020 Enver, All Rights Reserved</div>
    </div>
  );
}

export default Footer;
