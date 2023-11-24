import React from "react";
import RetangularCard from "@/components/ui/RetangularCard";
import { RectangleData } from "@/app/mocks";

const RecCardSection = () => {
  return (
    <section className=" py-20">
      <div className="container">
        <div className="sm:grid sm:gap-5 flex gap-4 no-scrollbar overflow-auto">
          {RectangleData.map((item, index) => (
            <RetangularCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecCardSection;
