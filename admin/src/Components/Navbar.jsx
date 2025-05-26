import React from "react";
import { assets } from "../Assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img
        className="w-[max(10%,80px)] mb-[-3rem] mt-[-3rem]"
        src={assets.logo}
        alt=""
      />
      <button
        onClick={() => setToken("")}
        className=" text-black px-5 py-2 sm:px-7 sm:py-2 border border-black rounded-full text-xs sm:text-sm cursor-pointer"
        style={{ backgroundColor: "rgb(102, 204, 255, 0.6)" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
