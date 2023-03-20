import React from "react";
import hero from "../../assets/heroImg.png";
import zigzag from "../../assets/vectorZigZag.png";
import circle from "../../assets/vectorCircle.png";
import play from "../../assets/vectorPlay.png";
import arrow from "../../assets/arrowIcon.svg";
import add from "../../assets/add.png";
import pink from "../../assets/rectPink.svg";
import blue from "../../assets/rectBlue.svg";

function Hero() {
  return (
    <div id="home" className="lg:flex lg:justify-between">
      <section className="lg:w-[80%] lg:max-w-[600px] xl:max-w-[650px] xxxl:max-w-[700px] lg:my-10 relative">
      <img src={blue} alt="" className="z-[-100] absolute top-[-150px] left-[-50px] lg:top-[-200px] lg:left-[-100px] opacity-80  blur-md sm:w-[100%] md:min-w-[769px] lg:min-w-[900px] lg:max-w-[50vw] " />
        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-mont font-bold leading-[150%] md:leading-[120%]">
          Build Your Awesome Platform
        </h1>
        <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.5rem] opacity-70 lg:leading-10 py-5">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="md:text-[20px] font-bold bg-blue inline-block px-5 md:px-7 py-3 md:py-4 rounded-md">
          <span>Our Services</span>
          <img src={arrow} alt="" className="inline-block pl-2" />
        </button>
      </section>
      <div className="flex justify-around my-10 lg:my-auto">
          <img src={pink} alt="" className="z-[-20] absolute sm:top-[300px] md:top-[200px] lg:top-[-200px] right-[0] opacity-60 blur-md overflow-hidden" />
        <div className="relative w-fit ">
          <img src={hero} alt="" className="mx-auto sm:h-[80%] lg:h-auto self-center" />
          <img
            src={zigzag}
            alt=""
            className="z-[-1] absolute top-0 lg:left-[3%] md:left-[-30px] h-[18px] md:h-[28px]"
          />
          <img
            src={add}
            alt=""
            className="z-[-1] absolute bottom-0 right-0 h-[42px] md:h-[60px]"
          />
          <img
            src={circle}
            alt=""
            className="z-[-1] absolute top-0 right-0 h-[40px] md:h-[50px]"
          />
          <img
            src={play}
            alt=""
            className="z-[-1] absolute bottom-0 left-[-15px] h-[75px] md:h-[120px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
