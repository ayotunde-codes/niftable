"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import {
  CloseIcon,
  DiscordIcon,
  HamburguerIcon,
  TelegramIcon,
  TwitterIcon,
} from "../icons";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const linksData = [
  {
    title: "Creon Pass",
    href: "/",
    comingSoon: false,
  },
  {
    title: "Token",
    href: "/",
    comingSoon: true,
  },
  {
    title: "AI Income",
    href: "/",
    comingSoon: true,
  },
  {
    title: "AI Launchpad",
    href: "/",
    comingSoon: true,
  },
];

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 px-[30px] z-10 py-5 transition-all duration-300 lg:px-[50px] lg:py-[30px] bg-transparent",
        {
          "!bg-black": scrolled,
        }
      )}
    >
      <div className="flex items-center justify-between !bg-transparent">
        <div className="relative w-[120px] h-[33px]  ">
          <Image src="/assets/icons/logo.svg" alt="logo" fill />
        </div>
        <div className="flex items-center gap-16">
          <div className="hidden xl:flex gap-10 items-center">
            {linksData.map((link, index) =>
              link.comingSoon ? (
                <div key={index} className="link-text">
                  <p className="p-0 m-0 link-text">
                    {link.title}{" "}
                    <span className="text-xs py-[2px] px-1 rounded-[100px] bg-black text-purple inline-block -translate-y-1">
                      Soon
                    </span>
                  </p>
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.title}
                  className=" cursor-pointer "
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
          <div className="flex gap-4 items-center">
            <AnimatePresence>
              {open && (
                <motion.aside
                  initial={{
                    x: "100%",
                  }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: "100%",
                    transition: { delay: 0.7, duration: 0.3 },
                  }}
                  className=" h-screen fixed bottom-0 right-0 overflow-y-auto top-0 left-0 z-20"
                >
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 pointer-events-none w-full h-full bg-grey-line bg-opacity-70 filter blur-[5px]"></div>
                    <div className="h-full  bg-black  relative ml-auto w-[60%] sm:max-w-[300px]">
                      <div className=" h-full flex flex-col">
                        <motion.div
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="pr-[15px]  flex w-full items-center justify-end gap-4 pt-5 lg:pt-[30px] pb-5 "
                        >
                          <div className={cn("btn-outline")}>Connect</div>
                          <div
                            onClick={() => {
                              cycleOpen();
                              document.body.style.overflow = "auto";
                            }}
                            className="cursor-pointer"
                          >
                            <CloseIcon />
                          </div>
                        </motion.div>
                        <motion.div
                          className=" py-5 flex-grow flex flex-col justify-between"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={sideVariants}
                        >
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={itemVariants}
                            className=""
                          >
                            <div className="flex justify-end w-full">
                              <motion.nav className="max-w-[170px] sm:max-w-[200px] border-y border-grey-line w-full grid ">
                                {linksData.map((link, index) =>
                                  link.comingSoon ? (
                                    <div
                                      key={index}
                                      className={cn(
                                        "py-4  border-b border-grey-line link-text",
                                        {
                                          "border-b-0":
                                            index === linksData.length - 1,
                                        }
                                      )}
                                    >
                                      <p className="p-0 m-0 link-text">
                                        {link.title}{" "}
                                        <span className="text-xs text-purple inline-block -translate-y-1">
                                          Soon
                                        </span>
                                      </p>
                                    </div>
                                  ) : (
                                    <Link
                                      href={link.href}
                                      key={link.title}
                                      className={cn(
                                        "py-4 cursor-pointer border-b border-grey-line",
                                        {
                                          "border-b-0":
                                            index === linksData.length - 1,
                                        }
                                      )}
                                    >
                                      {link.title}
                                    </Link>
                                  )
                                )}
                              </motion.nav>
                            </div>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={itemVariants}
                            className="flex justify-center items-center gap-5 py-5"
                          >
                            <div className="socialIconWrapper">
                              <TelegramIcon />
                            </div>
                            <div className="socialIconWrapper">
                              <DiscordIcon />
                            </div>
                            <div className="socialIconWrapper">
                              <TwitterIcon />
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
            <div className="btn-outline">Connect</div>
            <div
              onClick={() => {
                cycleOpen();
                document.body.style.overflow = "hidden";
              }}
              className=" cursor-pointer flex items-center justify-center xl:hidden"
            >
              <HamburguerIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
