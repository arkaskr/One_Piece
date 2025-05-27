import React from "react";
import { assets } from "../Assets/assets";

const Banner = () => {
  return (
    <div className="overflow-hidden flex flex-col sm:flex-row border border-gray-400">
      {/* Banner Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-5  sm:py-0">
        <div className="text-gray-700">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-700"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-gray-700"></p>
          </div>
        </div>
      </div>

      {/* Banner Right */}
      <img
        src={assets.banner}
        className="transition-transform duration-500 ease-in-out hover:scale-105 lg:h-[15rem] h-auto overflow-hidden sm:w-[50%]"
        alt=""
      />
    </div>
  );
};

export default Banner;
