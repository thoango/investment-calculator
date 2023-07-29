import ResultHeader from "./ResultHeader";
import ResultItem from "./ResultItem";

const ResultTable = (props) => {
  return (
    <table className="result">
      <ResultHeader></ResultHeader>

      <tbody>
        {props.data.map((item) => (
          <ResultItem key={item.year} result={item}></ResultItem>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
