import { useState } from "react";
import classes from "./UserInput.module.css";

const InitialUserInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(InitialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => ({ ...prevInput, [input]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    for (const data in userInput) {
      if (data === "") {
        return;
      }
    }
    props.onSubmitForm(userInput);
    resetHandler();
  };

  const resetHandler = () => {
    setUserInput(InitialUserInput);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
