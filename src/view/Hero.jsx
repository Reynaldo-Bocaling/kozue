import React from "react";
import Section from "../components/Section";
import Container from "../components/ui/Container";
import SlidingText from "../components/SlidingText";

const Hero = () => {
  return (
    <>
      <Section id="hero">
        <div className="flexCenter flex-cols flex-rows gap-12 mb-32">
          <div className="relative h-[450px] md:h-[750px] lg:h-[924px] w-full flexCenter">
            <div className="relative  z-[98] flexColCenter gap-3 translate-y-44 md:translate-y-56 lg:translate-y-[20rem]">
              <h1 className="title-font text-white text-6xl md:text-9xl font-bold ">
                $KOZUE
              </h1>
              <span className="title-font text-white text-xl md:text-2xl font-semibold tracking-wider">
                Kozue is sister of Neiro.
              </span>
              <button className="text-lg font-bold text-white bg-[#f94b0c] px-12 py-3 rounded-lg">
                Buy Now
              </button>
            </div>
            <img
              src="/img/hero.png"
              alt=""
              className="w-[70%] h-[450px] md:h-[900px] lg:h-[1124px]  absolute -bottom-3 left-1/2 -translate-x-1/2 z-1"
            />
          </div>
        </div>
        <SlidingText />
      </Section>
    </>
  );
};

export default Hero;
