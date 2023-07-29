const ResultHeader = () => {
  const HeaderArray = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];
  return (
    <thead>
      <tr>
        {HeaderArray.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default ResultHeader;
