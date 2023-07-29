import { useState } from "react";

import Header from "./components/Header/Header";
// import InvestionForm from "./components/InvestionForm/InvestionForm";
// import ResultTable from "./components/InvestionResult/ResultTable";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    let totalInvest = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInvest += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        totalInvest: totalInvest,
      });
    }
  }

  return (
    <div>
      <Header></Header>

      {/* <InvestionForm onFormSubmit={calculateHandler}></InvestionForm> */}

      <UserInput onSubmitForm={calculateHandler}></UserInput>

      {/* <ResultTable data={resultArray}></ResultTable> */}

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && <ResultTable result={yearlyData}></ResultTable>}
    </div>
  );
}

export default App;
