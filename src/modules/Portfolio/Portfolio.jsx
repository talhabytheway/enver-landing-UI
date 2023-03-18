import React, { useRef } from "react";
import zigzag from "../../assets/vectorZigZag.png";
import circle from "../../assets/vectorCircle.png";
import Carousel from "react-elastic-carousel";
import ItemT from "./ItemT";
import ItemC from "./ItemC";
import ItemB from "./ItemB";
import interior from '../../assets/portfolioInterior.png'
import digi from '../../assets/portfolioDigi.png'
import squid from '../../assets/portfolioSquid.png'
// import {Item} from './Item'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
];

function Portfolio() {
  const carouselRef = useRef(null);
  return (
    <div id="projects" className="relative pb-20">
      <div className="relative">
        <img
          src={circle}
          alt=""
          className="absolute bottom-0 right-0 h-[42px] md:h-[60px]  rotate-[-12deg]"
        />
        <h3 className="py-10 lg:py-20 text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-mont font-bold leading-snug w-[95%]">
          Our Awesome Portofolio
        </h3>
      </div>
      <div>
      <Carousel breakPoints={breakPoints} ref={carouselRef}>
        <ItemT><img src={interior} alt="" /></ItemT>
        <ItemC><img src={digi} alt="" /></ItemC>
        <ItemB><img src={squid} alt="" /></ItemB>
        <ItemT><img src={interior} alt="" /></ItemT>
        <ItemC><img src={digi} alt="" /></ItemC>
        <ItemB><img src={squid} alt="" /></ItemB>
        <ItemT><img src={interior} alt="" /></ItemT>
        <ItemC><img src={digi} alt="" /></ItemC>
        <ItemB><img src={squid} alt="" /></ItemB>
        </Carousel>
        <div className="flex justify-center rec-custom">
        <span onClick={() => carouselRef.current.slidePrev()} className="inline-block h-[50px] w-[50px] m-2 rounded-full bg-blue text-white text-[26px] text-center pt-[6px]">{'❮'}</span>
        <span onClick={() => carouselRef.current.slideNext()} className="inline-block h-[50px] w-[50px] m-2 rounded-full bg-blue text-white text-[26px] text-center pt-[6px]">{'❯'}</span>
        </div>
      </div>
      <img
        src={zigzag}
        alt=""
        className="absolute bottom-0 left-0 h-[18px] md:h-[28px]"
      />
    </div>
  );
}

export default Portfolio;
