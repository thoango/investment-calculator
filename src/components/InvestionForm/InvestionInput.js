import { useState } from "react";

const InvestionInput = (props) => {
  const [inputvalue, setInputValue] = useState("");

  const changeInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputValue(event.target.value);
      const input = { ...props.info, value: event.target.value };
      props.onInputChange(input);
    }
  };

  return (
    <p>
      <label htmlFor={props.info.id}>{props.info.text}</label>
      <input
        type={props.info.type}
        id={props.info.id}
        value={inputvalue}
        onChange={changeInputHandler}
      />
    </p>
  );
};

export default InvestionInput;
