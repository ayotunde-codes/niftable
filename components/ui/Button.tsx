"use client";
import cn from "classnames";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    animate(
      "#blue-bg",
      { background: hover ? "#3D8BFF" : "none", opacity: hover ? 1 : 0 },
      { duration: 0.5 }
    );
    animate("#active-1", { y: hover ? "0%" : "100%" }, { duration: 0.5 });
    animate("#main-text", { y: hover ? "-100%" : "0%" }, { duration: 0.5 });
  }, [hover]);
  return (
    <motion.div
      className={cn("h-max overflow-hidden relative", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={scope}
      onClick={onClick}
      id="button"
    >
      <p id="main-text">{text}</p>
      <div id="blue-bg" className="absolute w-full h-full bg-transparent"></div>
      <motion.p
        className="absolute  flex justify-center items-center top-0 w-full h-full"
        id="active-1"
        initial={{
          y: "100%",
        }}
        animate={{
          y: "100%",
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Button;
