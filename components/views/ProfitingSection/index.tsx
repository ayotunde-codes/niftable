"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  slideUpOpacityGlitchVariant,
  slideUpOpacityVariantWithoutDelay,
  viewport,
} from "@/utils/animationVariants";

const ProfitingSection = () => {
  return (
    <section className=" pt-[120px] pb-[140px]">
      <div className="container">
        <motion.div
          className="grid gap-[10px] lg:gap-5"
          variants={slideUpOpacityGlitchVariant}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          <h2 className="heading-2">Profiting Through</h2>
          <h2 className="heading-3 gradient-text text-right">
            AI Innovation & Decentralization
          </h2>
        </motion.div>
        <div className=" w-full grid gap-[70px] lg:grid-cols-12 md:pr-6 lg:pr-[30px] mt-[30px] xl:mt-16">
          <motion.div
            variants={slideUpOpacityVariantWithoutDelay}
            whileInView="animate"
            initial="initial"
            viewport={{
              ...viewport,
            }}
            transition={{
              delay: 0.1,
            }}
            className="relative  lg:col-span-8 h-[356px] rounded-md w-full lg:h-[484px]"
          >
            <Image
              src="/assets/images/profit-desktop.png"
              alt="creon-pass"
              className="rounded-md hidden xl:block"
              fill
            />
            <video
              className="xl:hidden w-full h-full  object-cover z-1"
              autoPlay
              muted
              loop
              src="/profit.mp4"
            >
              <source src="/profit.mp4" type="video/mp4" />
            </video>
            <div className="coloredOverlay-2"></div>
          </motion.div>
          <div className="flex flex-col justify-center font-satoshi gap-4 sm:gap-5 xl:gap-9 lg:col-span-4">
            <motion.h4
              className="heading-5"
              variants={slideUpOpacityVariantWithoutDelay}
              whileInView="animate"
              initial="initial"
              viewport={viewport}
            >
              The dynamic community driven business model of the future.
            </motion.h4>
            <motion.p
              variants={slideUpOpacityVariantWithoutDelay}
              whileInView="animate"
              initial="initial"
              viewport={viewport}
            >
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitingSection;
