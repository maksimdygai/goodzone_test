import { useState } from "react";
import { calculateFibonacci } from "../util/calculateFibonacci";

interface IInput {
  onSubmit: (value: number[]) => void;
}

export const Input: React.FC<IInput> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(calculateFibonacci(parseInt(value)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        className="input"
        placeholder="Enter number of cells"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="submit-btn">
        Calculate
      </button>
    </form>
  );
};
