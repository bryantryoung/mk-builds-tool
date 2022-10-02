import React from "react";
import TestAttributeForm from "../components/TestAttributeForm";
import BuildsDisplay from "../components/BuildsDisplay";
import Spinner from "../components/Spinner";
import mario from "../images/MkImg.png";
import RoadDashes from "../components/RoadDashes";

const BestBuilds = ({
  topBuilds,
  setTopBuilds,
  setIsLoading,
  setSelectedAttribute,
  isLoading,
  selectedAttribute,
}) => {
  let id = 0;
  console.log(topBuilds);
  return (
    <>
      {topBuilds[0] ? (
        <>
          <div className="flex justify-center items-center my-8">
            <table className="h-32 w-[700px]">
              <colgroup>
                <col className="border" />
                <col className=" border" />
                <col className="border " />
                <col className=" border" />
                <col className=" border" />
              </colgroup>
              <tr className="bg-gray-50 text-gray-500 h-10">
                <th>Rank</th>
                <th>Characters</th>
                <th>Kart</th>
                <th>Tires</th>
                <th>Glider</th>
              </tr>
              {topBuilds.map((build) => {
                id += 1;
                return (
                  <BuildsDisplay
                    build={build}
                    selectedAttribute={selectedAttribute}
                    key={Math.random() * 10000}
                    id={id}
                  />
                );
              })}
            </table>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[600px] bg-gray-500 sm:h-[400px]">
          <RoadDashes />
          <div className="flex flex-col justify-center items-center gap-2 sm:flex-row xl:w-3/4">
            <img src={mario} width="300" height="300" className="mr-10 z-10" />
            <div className="bg-white h-0 w-0 rounded-full lg:visible lg:h-12 opacity-80 lg:w-12"></div>
            <div className="bg-white h-0 w-0 rounded-full lg:visible lg:h-20 opacity-80 lg:w-20"></div>

            <h3 className="font-medium p-10 text-lg text-black z-10 bg-white opacity-80 rounded-full ">
              Select an attribute you would like to maximize or "Balanced" for
              the best overall. The result will be the top 10 character, kart,
              wheels, and glider combos to maximize your desired stat.
            </h3>
          </div>
        </div>
      )}

      <TestAttributeForm
        topBuilds={topBuilds}
        setTopBuilds={setTopBuilds}
        selectedAttribute={selectedAttribute}
        setSelectedAttribute={setSelectedAttribute}
        setIsLoading={setIsLoading}
      />
      {isLoading ? <Spinner /> : <></>}
    </>
  );
};

export default BestBuilds;
