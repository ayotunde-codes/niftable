import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const RetangularCard = ({ title, description, image }: Props) => {
  return (
    <div className=" bg-grey-line bg-opacity-60 h-auto rounded-md flex flex-col sm:grid sm:h-full overflow-y-hidden min-w-[291px] sm:w-auto  sm:grid-cols-6  sm:max-h-[370px] md:max-h-[320px] xl:max-h-[345px]">
      <div className="px-[18px] py-[18px] order-2 sm:order-1 sm:col-span-4 flex flex-col md:px-6  sm:grid gap-[10px] xl:gap-4 md:py-6 lg:px-10  lg:py-10">
        <h3 className="heading-3">{title}</h3>
        <p className="paragraph-2-sm-lg">{description}</p>
      </div>
      <div className="sm:col-span-2 h-[160px] order-1 sm:order-2 sm:h-full relative ">
        <Image src={image} alt="logo" fill />
        <div className="coloredOverlay-2"></div>
      </div>
    </div>
  );
};

export default RetangularCard;
