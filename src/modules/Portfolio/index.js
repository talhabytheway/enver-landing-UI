import React from "react";
import zigzag from "../../assets/vectorZigZag.png";
import circle from "../../assets/vectorCircle.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import interior from '../../assets/portfolioInterior.png'
import digi from '../../assets/portfolioDigi.png'
import squid from '../../assets/portfolioSquid.png'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

function Portfolio() {
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
      <Carousel breakPoints={breakPoints} className="">
        <Item><img src={interior} alt="" /></Item>
        <Item><img src={digi} alt="" /></Item>
        <Item><img src={squid} alt="" /></Item>
        <Item><img src={interior} alt="" /></Item>
        <Item><img src={digi} alt="" /></Item>
        <Item><img src={squid} alt="" /></Item>
        <Item><img src={interior} alt="" /></Item>
        <Item><img src={digi} alt="" /></Item>
        <Item><img src={squid} alt="" /></Item>
        </Carousel>
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
