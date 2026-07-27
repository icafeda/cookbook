import React from "react";

const TestimonialCard = ( item ) => {
  return (
    <figure className="flex flex-col justify-center items-center p-5 text-center bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <blockquote>
        <h3 className="text-lg font-semibold mb-3  text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <p className="text-gray-500 leading-relaxed font-light dark:text-gray-400">
          {item.content}
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-6 dark:text-white">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col items-start ">
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">{item.job}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
 