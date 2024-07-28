import React from "react";
import Section from "../components/Section";
import Container from "../components/ui/Container";

const About = () => {
  return (
    <>
      <Section id="about">
        <Container variant="flexCenter flex-col md:flex-row gap-12 bg-read-500">
          <div className="about_img max-w-lg p-3">
            <img src="/img/icon.png" alt="" className="rounded-lg" />
          </div>
          <div className="max-w-4xl w-full ">
            <h1 className="title-font text-4xl md:text-6xl font-semibold text-[#fffefe] mb-9">
              About $KOZUE
            </h1>
            <p className="text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              quasi quia, reiciendis nihil exercitationem dolor cum facere
              provident doloremque neque expedita. Alias, suscipit accusantium
              animi qui voluptatem repellendus totam sequi!
            </p>
            <button className="text-xl font-bold text-white bg-[#f94b0c] px-12 py-3 rounded-lg mt-7">
              Buy Now
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
