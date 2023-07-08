import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("Enter Text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const hanleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.formtitle}</h3>
        </label>
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary " onClick={hanleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-success mx-3" onClick={handleLowerClick}>
        Click to LowerCase
      </button>
      <button className="btn btn-warning" onClick={handleClear}>
        Click to Clear
      </button>
    </div>
  );
};

export default Textform;
