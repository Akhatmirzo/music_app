import React from "react";
import image from "../../assets/image";

export default function SearchInput({ label }) {
  return (
    <div className="z-[100] w-[434px] h-[50px] relative md:w-full md:mr-3">
      <input
        type="text"
        placeholder={label}
        className="w-full h-full placeholder:pl-[50px] placeholder:text-black pl-3 pr-[50px] py-2 font-mono text-[30px] text-black border-b-2 border-black bg-transparent focus:outline-none md:text-[24px] md:placeholder:text-[24px] md:placeholder:pl-[25px]"
      />
      <img src={image.search} alt="" className="w-[37px] h-[37px] absolute top-0 right-3" />
    </div>
  );
}
