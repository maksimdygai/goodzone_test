import { useState } from "react";
import { Input } from "./features/Input";
import "./App.css";
import { Table } from "./features/Table";

export function App() {
  const [sequence, setSequence] = useState<number[]>([1, 2]);

  const handleInputChange = (value: number[]) => {
    setSequence(value);
  };

  return (
    <div className="App">
      <header className="App-header">Goodzone Fibonacci Table Test</header>
      <Input onSubmit={handleInputChange} />
      <Table cells={sequence} />
    </div>
  );
}
