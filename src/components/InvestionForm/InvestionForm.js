import { useState } from "react";

import InvestionInput from "./InvestionInput";

const InputInfo = [
  {
    id: "current-savings",
    type: "number",
    text: "Current Savings ($)",
    value: "",
  },
  {
    id: "yearly-contribution",
    type: "number",
    text: "Yearly Savings ($)",
    value: "",
  },
  {
    id: "expected-return",
    type: "number",
    text: "Expected Interest (%, per year)",
    value: "",
  },
  {
    id: "duration",
    type: "number",
    text: "Investment Duration (years)",
    value: "",
  },
];

const InvestionForm = (props) => {
  const [inputArray, setInputArray] = useState([...InputInfo]);

  const inputChangeHandler = (input) => {
    const index = inputArray.findIndex((item) => item.id === input.id);
    inputArray[index] = input;
    setInputArray(inputArray);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const userInput = {};
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value === "") {
        return;
      }
      userInput[inputArray[i].id] = inputArray[i].value;
      inputArray[i].value = "";
    }
    props.onFormSubmit(userInput);
  };

  return (
    <form className="form">
      <div className="input-group">
        <InvestionInput
          info={inputArray[0]}
          onInputChange={inputChangeHandler}
        ></InvestionInput>
        <InvestionInput
          info={inputArray[1]}
          onInputChange={inputChangeHandler}
        ></InvestionInput>
      </div>
      <div className="input-group">
        <InvestionInput
          info={inputArray[2]}
          onInputChange={inputChangeHandler}
        ></InvestionInput>
        <InvestionInput
          info={inputArray[3]}
          onInputChange={inputChangeHandler}
        ></InvestionInput>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" onClick={submitFormHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestionForm;
