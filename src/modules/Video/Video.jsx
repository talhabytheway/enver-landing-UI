import React from "react";

function Video() {
  return (
    <div className="my-10">
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-mont font-bold leading-snug mt-5 md:mb-5">
          Why Enver Is The Best Choice?
        </h3>
        <p className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold font-nunito opacity-70 mb-5 md:mt-5">
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
