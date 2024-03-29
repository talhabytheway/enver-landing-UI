import React from "react";

function Video() {
  return (
    <div className="mb-10">
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-20 mb-12">
        <h3 className="text-[36px] md:text-[46px] lg:text-[60px] font-mont font-bold leading-snug mt-5 md:mb-5">
          Why Enver Is The Best Choice?
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[21px] lg:font-semibold font-nunito opacity-70 mb-5 md:mt-5">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </section>
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/V-_O7nl0Ii0"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
