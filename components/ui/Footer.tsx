import Image from "next/image";
import React from "react";

import {
  DiscordIcon,
  NiftableTextIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

const Footer = () => {
  return (
    <footer className="pt-4 bg-black relative pb-9 font-satoshi text-sm lg:text-base font-normal">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-7 items-center justify-between">
          <div className="grid gap-7 md:grid-flow-col md:gap-20 md:w-max items-center">
            <p className=" text-center md:text-start order-2 md:order-1 ">
              © Creon 2023. All rights reserved.
            </p>
            <div className="order-1 md:order-2 flex items-center justify-center md:justify-normal gap-2.5 ">
              <div className="socialIconWrapper">
                <TelegramIcon />
              </div>
              <div className="socialIconWrapper">
                <DiscordIcon />
              </div>
              <div className="socialIconWrapper">
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="grid items-center gap-1.5 grid-flow-col w-max">
            <p>Powered by</p>
            <NiftableTextIcon classname="w-[90px] h-[16px] lg:w-[101px] lg:h-[18px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
