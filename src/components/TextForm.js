import React, { useState } from "react";

const TextForm = ({ heading }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const upperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const senCase = () => {
    let sentence = text
      .split(" ")
      .map((text) => text[0].toUpperCase() + text.slice(1).toLowerCase())
      .join(" ");

    setText(sentence);
  };

  return (
    <div>
      <div className="container my-5 form-floating">
        <h1>{heading}</h1>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="floatingTextarea2"
          style={{ height: "150px" }}
        ></textarea>
        <div
          className="btn my-3 btn-info"
          onClick={() => {
            upperCase();
          }}
        >
          UPPER CASE
        </div>
        <div
          className="btn btn-info mx-3"
          onClick={() => {
            lowerCase();
          }}
        >
          lower case
        </div>
        <div
          className="btn btn-info mx-3"
          onClick={() => {
            senCase();
          }}
        >
          Sentence Case
        </div>
        <div
          className="btn btn-info"
          onClick={() => {
            setText("");
          }}
        >
          Clear
        </div>
      </div>
      <div className="container">
        <h1>Text Summary:</h1>
        <p>
          No Of Words: {text.split(" ").length} and No Of Character:{" "}
          {text.length}
        </p>
        <p>Minutes To Read: {0.888 * text.split(" ").length}</p>
        <div
          className="btn btn-primary"
          onClick={() => setShow((prevCheck) => !prevCheck)}
        >
          Preview
        </div>
        {show ? (
          <p className="my-3">{text}</p>
        ) : (
          <p className="my-3">Click to Preview</p>
        )}
      </div>
    </div>
  );
};

export default TextForm;
