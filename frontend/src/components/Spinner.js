import React from "react";
import spinner from "../images/Spinner.svg";

const Spinner = () => {
  return (
    <img
      src={spinner}
      className="absolute top-4/4 left-[55%] -translate-x-28 translate-y-8"
      height="60"
      width="60"
    />
  );
};

export default Spinner;
