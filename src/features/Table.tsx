export const Table: React.FC<{ cells: number[] }> = ({ cells }) => (
  <table className="fibonacci-table">
    <thead>
      <tr>
        <th>Index</th>
        <th>Fibonacci Number</th>
      </tr>
    </thead>
    <tbody>
      {cells.map((num, index) => (
        <tr key={num}>
          <td>{index}</td>
          <td>{num}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
