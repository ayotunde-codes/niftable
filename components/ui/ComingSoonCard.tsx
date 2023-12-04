"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  desktopImage: string;
};

const ComingSoonCard = ({
  title,
  subtitle,
  description,
  image,
  desktopImage,
}: Props) => {
  return (
    <div className="relative py-5 xl:py-[30px] box-border min-w-[291px] bg-grey-line bg-opacity-60 rounded-md ">
      <div className="absolute w-max flex box-border items-center justify-center rounded-[100px] py-[3px] px-1.5 text-black bg-white text-xs font-satoshi right-5 top-0 -translate-y-1/2 z-[3]  pointer-events-none xl:right-[30px]">
        coming soon
      </div>
      <div className="px-5 xl:px-[30px] min-h-[98px] xl:min-h-[111px]">
        <h3 className="heading-3">{title}</h3>
        <p className="gradient-text paragraph">{subtitle}</p>
      </div>
      <div className="pr-5 xl:pr-[30px] mt-5 lg:mt-[30px] h-[233px]">
        <div className="w-full h-full relative overflow-hidden">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
            className="w-full h-full relative"
          >
            <Image src={image} alt="card" className="xl:hidden " fill />
            <Image
              src={desktopImage}
              alt="card"
              className="hidden xl:block"
              fill
            />
          </motion.div>
          <div className="coloredOverlay-2-blend-color"></div>
        </div>
      </div>
      <div className="px-5 xl:px-[30px] mt-5 lg:mt-[30px]">
        <p className="paragraph-2-sm-lg">{description}</p>
      </div>
    </div>
  );
};

export default ComingSoonCard;
