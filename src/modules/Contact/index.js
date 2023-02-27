import React from "react";
import circle from "../../assets/vectorCircle.png";
import add from "../../assets/add.png";


function Contact() {
  return (
    <div className="w-full bg-light">
    <div className="xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1440px] py-10 pb-20 lg:pb-10">
      <div className="relative w-full flex lg:flex-row flex-col items-center justify-between  ">
        <h3 className="py-10 lg:py-20  text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-mont font-bold leading-snug lg:w-[70%]">
          Contact us for the service you want to use
        </h3>
        <div className="self-start lg:self-center"><button className="align-right my-2 mb-8 md:text-[20px] font-semibold font-nunito bg-blue inline-block px-7 md:px-10 py-3 md:py-4 rounded-md">
          <span>Contact Us</span>
        </button></div>
        <img
            src={circle}
            alt=""
            className="z-[1] absolute bottom-[-60px] lg:bottom-[-30px] left-0 h-[42px] md:h-[60px]"
          />
          <img
        src={add}
        alt=""
        className="z-[1] absolute top-0 right-0 h-[28px] md:h-[36px] lg:h-[42px]"
      />
      </div>
    </div>
    </div>
  );
}

export default Contact;
