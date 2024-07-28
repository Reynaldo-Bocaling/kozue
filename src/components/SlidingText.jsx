import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full  absolute -bottom-28 left-0  ">
      <div className=" bg-[#f0ff80] py-3 -rotate-[5deg] translate-y-7 shadow-md w-full">
        s
        <Marquee direction="right">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="mx-10  flexCenter gap-12">
              <h1 className="text-2xl">Buy Now</h1>
              <h1 className="text-orange-500 text-2xl font-bold">*</h1>
            </div>
          ))}
        </Marquee>
      </div>
      <div className=" bg-[#f0ff80] py-3 rotate-[5deg] -translate-y-12  shadow-md w-full">
        s
        <Marquee direction="left">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="mx-10  flexCenter gap-12">
              <h1 className="text-2xl">Buy Now</h1>
              <h1 className="text-orange-500 text-2xl font-bold">*</h1>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SlidingText;
