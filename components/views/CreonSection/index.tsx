"use client";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

import {
  slideUpOpacityVariantWithoutDelay,
  viewport,
} from "@/utils/animationVariants";

const CreonSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className=" grid gap-10 xl:gap-14">
            <motion.h3
              variants={slideUpOpacityVariantWithoutDelay}
              whileInView="animate"
              initial="initial"
              viewport={viewport}
              className="heading-2"
            >
              creon pass nft
            </motion.h3>
            <motion.p
              variants={slideUpOpacityVariantWithoutDelay}
              whileInView="animate"
              initial="initial"
              viewport={viewport}
              className="gradient-text font-satoshi font-bold text-lg lg:text-[22px] leading-[130%]"
            >
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </motion.p>
            <motion.div
              variants={slideUpOpacityVariantWithoutDelay}
              whileInView="animate"
              initial="initial"
              viewport={viewport}
              className="lg:grid hidden gap-[10px] text-base font-satoshi 2xl:text-lg text-white"
            >
              <p className="px-[18px] border pt-3 pb-4 rounded border-grey-line w-max">
                Pre-launch investment opportunities for upcoming AI projects
              </p>
              <p className="px-[18px] border pt-3 pb-4 rounded border-grey-line w-max">
                Free and early access to Creon built AI projects
              </p>
              <p className="px-[18px] border pt-3 pb-4 rounded border-grey-line w-max">
                Higher allocation limits on the Creon AI Launchpad
              </p>
              <p className="px-[18px] border pt-3 pb-4 rounded border-grey-line w-max">
                Revenue share distribution from Creon built AI projects
              </p>
            </motion.div>

            <div className="lg:hidden gap-10 sm:gap-0 grid sm:grid-cols-2">
              <motion.div
                variants={slideUpOpacityVariantWithoutDelay}
                whileInView="animate"
                initial="initial"
                viewport={viewport}
                className="grid grid-cols-12 h-max gap-8 font-satoshi order-2 sm:order-1"
              >
                <p className="col-span-12">
                  Prospect to derive financial benefits through the
                  redistributed profit generated from AI tools, but only when
                  the majority of NFT holders decide to release the tool
                  publicly.
                </p>
                <p className="col-span-6">
                  The possibility of allocating investments into new,
                  exceptional tokenized AI tools through Creon Launchpad.
                </p>
                <p className="col-span-6">
                  Early access to allocations in inspiring tokenized projects,
                  real businesses based on AI.
                </p>
              </motion.div>
              <motion.div
                variants={slideUpOpacityVariantWithoutDelay}
                whileInView="animate"
                initial="initial"
                viewport={viewport}
                className="w-full h-full relative block order-1 sm:order-2 lg:hidden"
              >
                <video
                  className="w-full object-fill h-full   z-1"
                  autoPlay
                  muted
                  loop
                  src="/creon.mp4"
                >
                  <source src="/creon.mp4" type="video/mp4" />
                </video>
                <div className=" h-20 sm:h-28 w-full absolute bottom-0 rounded-[1288px] translate-y-[45%] sm:translate-y-[50%] bg-black filter blur-2xl z-1 flex left-0"></div>
                <div className="h-20 sm:h-24 w-full absolute top-0 rounded-[1288px] -translate-y-[45%] bg-black filter blur-2xl z-1 flex left-0"></div>
              </motion.div>
            </div>

            <Button
              onClick={() => {}}
              text="Buy Creon Pass"
              className="gradient-button lg:mt-8 sm:max-w-[231px] xl:max-w-[413px] 2xl:max-w-[453px]"
            />
          </div>

          <motion.div
            variants={slideUpOpacityVariantWithoutDelay}
            whileInView="animate"
            initial="initial"
            viewport={viewport}
            className="w-full h-full relative hidden lg:block"
          >
            <video
              className="w-full object-fill h-full   z-1"
              autoPlay
              muted
              loop
              src="/creon.mp4"
            >
              <source src="/creon.mp4" type="video/mp4" />
            </video>
            <div className=" h-32 w-full absolute bottom-0 rounded-[1288px] translate-y-[50%] bg-black filter blur-2xl z-1 flex left-0"></div>
            <div className=" h-32 w-full absolute top-0 rounded-[1288px] -translate-y-[50%] bg-black filter blur-2xl z-1 flex left-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreonSection;
