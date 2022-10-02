import Header from "./components/Header";
import BestBuilds from "./pages/BestBuilds";

import { useState } from "react";

function App() {
  const [topBuilds, setTopBuilds] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <BestBuilds
        topBuilds={topBuilds}
        setTopBuilds={setTopBuilds}
        setIsLoading={setIsLoading}
        setSelectedAttribute={setSelectedAttribute}
        isLoading={isLoading}
        selectedAttribute={selectedAttribute}
      />
    </>
  );
}

export default App;
