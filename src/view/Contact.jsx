import React from "react";
import Section from "../components/Section";
import Container from "../components/ui/Container";

const Contact = () => {
  return (
    <>
      <Section id="about">
        <Container variant="flexCenter flex-cols flex-rows gap-12 bg-rsed-500 mt-16">
          <p className="title-font text-white text-base md:text-xl text-center">
            &copy; 2024 Your $KOZUE. All rights reserved
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
