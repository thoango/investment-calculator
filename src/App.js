import { useState } from "react";

import Header from "./components/Header/Header";
import InvestionForm from "./components/InvestionForm/InvestionForm";
import ResultTable from "./components/InvestionResult/ResultTable";

function App() {
  const [resultArray, setResultArray] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    let totalInvest = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInvest += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterest += yearlyInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        totalInvest: totalInvest,
      });
    }

    // do something with yearlyData ...
    setResultArray(yearlyData);
  };

  return (
    <div>
      <Header></Header>

      <InvestionForm onFormSubmit={calculateHandler}></InvestionForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable data={resultArray}></ResultTable>
    </div>
  );
}

export default App;
