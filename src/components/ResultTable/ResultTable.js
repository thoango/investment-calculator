import classes from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.totalSavings)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.totalInvest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
