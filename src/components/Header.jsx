import React from "react";
import Container from "./ui/Container";
import { navlinks, social } from "../constants";
import HeaderTitle from "./ui/HeaderTitle";

const Header = () => {
  return (
    <header className="bg-[#ffeb09]">
      <Container variant="relative flexBetween px-5 py-2 ">
        <HeaderTitle />
        <nav>
          <ul className="relative flexCenter gap-3 md:gap-5 z-[99]">
            {social.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className="text-lg font-medium e">
                    <img src={item.icon} alt="" className="w-[40px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
