import React from "react";
import TestimonialCard from "../../../components/Elements/TestimonialCard";
import  testimonialData  from "../../../data/testimonialData";


const Testimonials = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 pt-4 underline underline-offset-8">
        Student About CodeBook
      </h1>
          <div className="grid mb-8 border border-gray-100 dark:border-gray-700  md:mb-12 sm:grid-cols-2 md:grid-cols-3">
              {testimonialData.map((item) => (
                <TestimonialCard
                      key={item.id}
                      {...item}
                />
              ))}
      </div>
    </section>
  );
};

export default Testimonials;
