import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Section from "./Section/Section";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import IntersectionContext from "./store/intersection-context";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
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
