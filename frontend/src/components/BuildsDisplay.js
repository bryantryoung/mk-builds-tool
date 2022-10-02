import React from "react";

const BuildsDisplay = ({ build, selectedAttribute, id }) => {
  if (build) {
    return (
      <tr className="border h-8">
        <td className="text-center font-bold">{id}.</td>
        <td className="text-center">{build["A"]}</td>
        <td className="text-center">{build["B"]}</td>
        <td className="text-center">{build["C"]}</td>
        <td className="text-center">{build["D"]}</td>
      </tr>
    );
  } else {
    return <></>;
  }
};

export default BuildsDisplay;
