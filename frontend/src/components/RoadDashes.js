import React from "react";

const RoadDashes = () => {
  return (
    <div className="w-full flex justify-center items-center absolute opacity-0 h-10 sm:opacity-100 sm:gap-[20%]">
      <div className=" h-10 w-28 bg-yellow-200 opacity-40 translate-x-10 "></div>
      <div className=" h-10 w-28 bg-yellow-200 opacity-40 translate-x-1/4 "></div>
      <div className=" h-10 w-28 bg-yellow-200 opacity-40 translate-x-2/4 "></div>
      <div className=" h-10 w-28 bg-yellow-200 opacity-40 translate-x-3/4 "></div>
    </div>
  );
};

export default RoadDashes;
