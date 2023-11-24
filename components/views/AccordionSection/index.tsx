import Accordion from "@/components/Accordion";
import Image from "next/image";
import React from "react";
import { AccordionData } from "@/app/mocks";

const AccordionSection = () => {
  return (
    <section className=" pt-20 md:pt-28 pb-12">
      <div className="container">
        <div className="relative grid gap-36 lg:grid-cols-9 md:gap-16 lg:gap-24 w-full">
          <div className="md:col-span-4 xl:col-span-5 max-w-[699px]">
            <h3 className="heading-3">
              our mission is to provide unique, confidential AI-based tools, to
              which you will gain
              <span className="gradient-text">
                {" "}
                lifetime access through NFT tokens and our CREON token.
              </span>
            </h3>
          </div>
          <div className=" sm:w-[70%] md:w-full md:col-span-5 xl:col-span-4">
            {AccordionData.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  body={item.body}
                />
              );
            })}
          </div>
          <div className="absolute top-[18%] sm:top-[80%] lg:top-[60%] sm:-transform-y-[30px]  right-0 w-[40%] xl:w-1/2 lg:-bottom-[15%] lg:left-1/2 lg:w-[40%] xl:-translate-x-[80%] lg:-translate-x-[110%]">
            <div className="relative w-full lg:h-[300px] h-[140px] xl:h-[400px]">
              <Image
                src="/assets/images/creono.png"
                alt="creon-pass"
                className=""
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
