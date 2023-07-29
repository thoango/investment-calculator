const ResultItem = (props) => {
  return (
    <tr>
      <td>{props.result.year}</td>
      <td>{props.result.totalSavings}</td>
      <td>{props.result.yearlyInterest}</td>
      <td>{props.result.totalInterest}</td>
      <td>{props.result.totalInvest}</td>
    </tr>
  );
};
export default ResultItem;
