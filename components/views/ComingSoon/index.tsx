import ComingSoonCard from "@/components/ui/ComingSoonCard";
import React from "react";
import { ComingSoonData } from "@/app/mocks";

const ComingSoon = () => {
  return (
    <section className=" py-14 xl:py-32">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 md:gap-5 flex gap-4 no-scrollbar relative py-4  overflow-x-auto">
          {ComingSoonData.map((item, index) => (
            <ComingSoonCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
