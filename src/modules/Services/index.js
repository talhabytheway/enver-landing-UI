import React from "react";
import dev from "../../assets/dev.png";
import uiDesign from "../../assets/uiDesign.png";
import graphik from "../../assets/graphik.png";
import motion from "../../assets/motion.png";
import photography from "../../assets/photography.png";
import videography from "../../assets/videography.png";
import play from "../../assets/vectorPlay.png";
import add from "../../assets/add.png";
import blob from "../../assets/serviceBlob.svg";
import rectO from "../../assets/serviceRectOrange.svg";
import blobR from "../../assets/serviceBlobRight.svg";

function Services() {
  return (
    <div className="py-10 relative">
      <img
        src={blob}
        alt=""
        className="z-[10] absolute top-[-400px] left-[-250px] md:left-[-300px] lg:left-[-500px] xl:left-[-800px]"
      />
       <img
        src={blobR}
        alt=""
        className="z-[-1] absolute top-[400px] right-[-24px] md:right-[-48px] lg:right-[-96px] xl:right-[-200px] overflow-hidden"
      />
      <img
        src={rectO}
        alt=""
        className="z-[-1] absolute top-0 md:top-[-200px] lg:top-[-400px] right-[-24px] md:right-[-48px] lg:right-[-96px] xl:right-[-200px] overflow-hidden"
      />
      <img
        src={add}
        alt=""
        className="z-[-1] absolute bottom-0 left-0 h-[28px] md:h-[36px] lg:h-[42px] rotate-12"
      />
      <div className="relative">
      <h3 className="py-20  md:mx-auto text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-mont font-bold leading-snug md:max-w-[600px] lg:max-w-[800px] text-center">
        The Service We Provide For You
      </h3>
      <img
        src={play}
        alt=""
        className="z-[-1] absolute top-0 left-0 h-[75px] md:h-[120px]"
      />
      <img
        src={add}
        alt=""
        className="z-[-1] absolute bottom-0 right-[-15px] h-[28px] md:h-[36px] lg:h-[42px] lg:rotate-12"
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        <div className="text-center px-12 xl:px-16 font-semibold">
          <img src={dev} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">Development</h5>
          <p className="opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>
        <div className="text-center max-w-[600px] mx-auto px-12 lg:px-16 font-semibold">
          <img src={uiDesign} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">UI/UX Design</h5>
          <p className="opacity-70">
            We provide UI/UX Design services, and of course with the best
            quality
          </p>
        </div>
        <div className="text-center max-w-[600px] mx-auto px-12 lg:px-16 font-semibold">
          <img src={graphik} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">
            Graphik Design
          </h5>
          <p className="opacity-70">
            We provide Graphic Design services, with the best designers
          </p>
        </div>
        <div className="text-center max-w-[600px] mx-auto px-12 lg:px-16 font-semibold">
          <img src={motion} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">
            Motion Graphik
          </h5>
          <p className="opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>
        <div className="text-center max-w-[600px] mx-auto px-12 lg:px-16 font-semibold">
          <img src={photography} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">Photography</h5>
          <p className="opacity-70">
            We provide Photography services, and of course with the best quality
          </p>
        </div>
        <div className="text-center max-w-[600px] mx-auto px-12 lg:px-16 font-semibold">
          <img src={videography} alt="" className="mx-auto" />
          <h5 className="text-6 md:text-8 font-bold mb-3 mt-2">Videography</h5>
          <p className="opacity-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Services;
