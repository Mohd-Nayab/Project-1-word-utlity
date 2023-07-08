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
    <>
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
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters.
        </p>
        <p>
          Avg Time to read above Content ={0.008 * text.split(" ").length}{" "}
          minutes
        </p>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item  ">
            <h2 class="accordion-header " id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5>Preview</h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>{text}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textform;
