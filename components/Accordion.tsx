"use client";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

import {
  ActiveEffect,
  ActiveEffectInner,
  ChevronDownIcon,
  ChevronUpIcon,
  DashBordeGradient,
  InactiveEffect,
  InactiveEffectInner,
} from "./icons";

export type AccordionProps = {
  title: string;
  body: string;
  icon: ReactNode;
};

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    animate("#active-1", { opacity: isOpen ? 1 : 0 });
    animate("#active-2", { opacity: isOpen ? 1 : 0 });
  }, [isOpen]);

  return (
    <div
      className="flex w-full relative gap-5 px-1 py-8 md:first:pt-2 border-t border-grey-line cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className="relative xl:w-[100px] xl:h-[114px] w-[73px] h-[83px]"
        ref={scope}
      >
        <DashBordeGradient classname=" absolute xl:w-[100px] xl:h-[114px] w-[73px] h-[83px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <InactiveEffect classname="absolute top-1/2 xl:w-[68px] xl:h-[76px] w-[51px] h-[55px] left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <ActiveEffect
          id="active-1"
          classname="absolute top-1/2  opacity-0 xl:w-[68px] xl:h-[76px] w-[51px] h-[55px]  left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <InactiveEffectInner classname="absolute top-1/2 xl:w-[56px] xl:h-[62px] w-[42px] h-[45px] z-1 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <ActiveEffectInner
          id="active-2"
          classname="absolute top-1/2 xl:w-[56px] xl:h-[62px] w-[42px] h-[45px]  opacity-0  z-1 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[2] -translate-y-1/2">
          {props.icon}
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 mt-6 lg:mt-10">
        <button
          aria-controls={props.title}
          aria-expanded={isOpen}
          className="flex justify-between text-left  items-center w-full space-x-4"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            whileHover={{
              color: "#3D8BFF",
            }}
            className="heading-5"
          >
            {props.title}
          </motion.div>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial={{
                rotate: isOpen ? -90 : 90,
              }}
              animate={{
                rotate: 0,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circOut",
                },
              }}
              exit={{
                rotate: isOpen ? -90 : 90,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circIn",
                },
              }}
            >
              {isOpen ? (
                <ChevronUpIcon hovered={hover} />
              ) : (
                <ChevronDownIcon hovered={hover} />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
        <motion.div
          id={props.title}
          initial={false}
          animate={
            isOpen
              ? {
                  height: "auto",
                  opacity: 1,
                  display: "block",
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15,
                    },
                  },
                }
              : {
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                  transitionEnd: {
                    display: "none",
                  },
                }
          }
          className="font-light mt-4 w-full"
        >
          <div className="paragraph-2-sm-lg">{props.body}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;
