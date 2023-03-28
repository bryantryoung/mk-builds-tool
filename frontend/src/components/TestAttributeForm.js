import { useEffect, useState } from "react";

const TestAttributeForm = ({
  topBuilds,
  setTopBuilds,
  selectedAttribute,
  setSelectedAttribute,
  setIsLoading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTopBuilds([]);
    setIsLoading(true);
    setTimeout(() => {
      fetchBuildData();
    }, 500);
  };
  /* useEffect(() => {
    fetchBuildData();
  }, []); */
  const apiUrl = process.env.API_URL || "http://localhost:5001";

  const fetchBuildData = async () => {
    let attributeTableColumn;
    switch (selectedAttribute) {
      case "Speed":
        attributeTableColumn = "E";
        break;
      case "Acceleration":
        attributeTableColumn = "F";
        break;
      case "Weight":
        attributeTableColumn = "G";
        break;
      case "Handling":
        attributeTableColumn = "H";
        break;
      case "Traction/Grip":
        attributeTableColumn = "I";
        break;
      case "Mini-Turbo":
        attributeTableColumn = "J";
        break;
    }

    // Table Info:
    // A: characters
    // B: body (kart)
    // C: tire
    // D: glider
    // E: speed
    // F: acceleration
    // G: weight
    // H: handling
    // I: traction/grip
    // J: mini-turbo
    if (selectedAttribute === "Balanced") {
      const buildData = await fetch(`${apiUrl}/balanced-builds`, {
        method: "GET",
        headers: {
          "Allow-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTopBuilds(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));

      return;
    }

    const buildData = await fetch(`${apiUrl}/builds`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const topTenBuilds = data["optimal_wdupes"]
          .sort((a, b) =>
            a[attributeTableColumn] < b[attributeTableColumn] ? 1 : -1
          )
          .splice(0, 10);
        console.log(topTenBuilds);
        setTopBuilds(topTenBuilds);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-10 sm:flex-row sm:items-end mt-10"
      action="http://localhost:5001/builds"
      method="GET"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center gap-2 sm:mr-10">
        <label htmlFor="attribute" className="font-medium text-lg">
          Attribute
        </label>
        <select
          className="h-12 w-36 p-2"
          name="attribute"
          onChange={(e) => {
            setSelectedAttribute(e.target.value);
            console.log(e.target.value);
          }}
          value={selectedAttribute}
        >
          <option>Speed</option>
          <option>Acceleration</option>
          <option>Weight</option>
          <option>Handling</option>
          <option>Traction/Grip</option>
          <option>Mini-Turbo</option>
          <option>Balanced</option>
        </select>
      </div>

      <button
        type="submit"
        className=" font-medium  bg-blue-400 h-16 w-40 duration-500 rounded text-white"
      >
        Show me the best build!
      </button>
    </form>
  );
};

export default TestAttributeForm;
