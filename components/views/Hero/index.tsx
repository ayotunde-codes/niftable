"use client";
import cn from "classnames";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import {
  slideUpOpacityGlitchVariant,
  slideUpOpacityVariant,
} from "@/utils/animationVariants";

const Hero = () => {
  return (
    <section className="relative pageHeaderWrapper">
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full z-[1] pointer-events-none",
          styles.overlay
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full z-[2] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black"
        )}
      ></div>
      <div className="absolute top-0  w-full h-full left-0 right-0 bottom-0 pointer-events-none">
        <video
          className="w-full h-full  object-cover z-1"
          autoPlay
          muted
          loop
          src="/hero.mov"
        >
          <source src="/hero.mov" type="video/mov" />
        </video>
      </div>
      <div className="relative w-full h-[710px] sm:h-[770px] md:h-[900px] lg:h-[667px] xl:h-[770px]">
        <div className="container text-white ">
          <div className="h-full flex flex-col z-[2] relative justify-end pb-[70px] gap-5 xl:gap-10 md:pb-28">
            <h1 className="font-monumentExtended text-[32px] sm:text-[38px] md:text-[44px] leading-[110%] sm:max-w-[465px] lg:hidden">
              Empowering AI-Crypto Innovations and Integrating AI Tools into
              crypto.
            </h1>
            <motion.h1
              variants={slideUpOpacityGlitchVariant}
              initial="initial"
              animate="animate"
              className="hidden lg:block font-monumentExtended lg:text-[44px] xl:text-[68px] leading-[110%]"
            >
              The world&aposs first platform for Tokenizing AI blockchain
              projects
            </motion.h1>
            <motion.div
              className={cn(
                "w-full sm:max-w-[465px] lg:max-w-[630px] py-1.5",
                styles.gradientBorder
              )}
              variants={slideUpOpacityVariant}
              initial="initial"
              animate="animate"
            >
              <p className={cn("font-satoshi font-bold", styles.gradientText)}>
                Creon «Create On» confidential AI Tools for granting access
                through NFTs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
