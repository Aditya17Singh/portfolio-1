import React from "react";
import Headers from "./Headers";
import Hero from "./Hero";
import About from "./About";
import Dark from "./Dark";

function App() {
  return (
    <>
      <Headers />
      <Hero />
      <About dark={<Dark />} />
    </>
  );
}

export default App;
