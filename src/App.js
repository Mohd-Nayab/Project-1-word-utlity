import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <div>
      <Navbar title="Text-Editor" tab1="Main" />
      <TextForm formtitle="Enter Your Text" />
    </div>
  );
};

export default App;
