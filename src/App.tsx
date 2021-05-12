import React, { useState } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Section from "./Section/Section";

import IntersectionContext from "./store/intersection-context";

function App() {
  const [currSection, setCurrSection] = useState("intro");

  const changeSection = (section: string) => {
    setCurrSection(section);
  };

  return (
    <div className="App">
      <IntersectionContext.Provider
        value={{ section: currSection, changeSection: changeSection }}
      >
        <Layout>
          <Section changeSection={changeSection}></Section>
        </Layout>
      </IntersectionContext.Provider>
    </div>
  );
}

export default App;
