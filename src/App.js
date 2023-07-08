import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
// import About from "./components/About";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar
        title="Text-Editor"
        tab1="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm formtitle="Enter Your Text" />
      {/* <About /> */}
    </div>
  );
};

export default App;
