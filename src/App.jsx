import { useState } from "react";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Connect from "./Components/Connect";
function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Connect></Connect>
    </>
  );
}

export default App;
