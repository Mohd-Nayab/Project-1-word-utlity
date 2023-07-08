import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
// import TextForm from "./components/TextForm";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar title="Text-Editor" tab1="Home" />
      {/* <TextForm formtitle="Enter Your Text" /> */}
      <About />
    </div>
  );
};

export default App;
