import React from "react";
import Section from "../components/Section";
import Container from "../components/ui/Container";
import { tokenomics } from "../constants";

const Tokenomics = () => {
  return (
    <>
      <Section id="about">
        <Container variant="flexCenter flex-col gap-12 bg-rsed-500 mt-12">
          <h1 className="title-font text-4xl md:text-6xl font-semibold text-[#fffefe]">
            Tokenomics
          </h1>

          <ul className="max-w-4xl flex flex-col md:flex-row items-center justify-around w-full ">
            {tokenomics.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center gap-4"
              >
                <h1 className="title-font text-[#f94b0c] text-3xl font-bold">
                  {item.value}
                </h1>
                <p className="title-font text-white text-2xl font-bold">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default Tokenomics;
