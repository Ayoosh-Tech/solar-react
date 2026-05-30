import { useState } from "react";
import "./SolarCalculator.css";

const SolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [roofSize, setRoofSize] = useState("");
  const [result, setResult] = useState(null);

  const calculateSolar = () => {
    const monthlyBill = Number(bill);

    const systemSize = (monthlyBill / 10000).toFixed(1);
    const upfrontCost = (systemSize * 800000).toLocaleString();
    const monthlySavings = (monthlyBill * 0.7).toLocaleString();

    setResult({
      systemSize,
      upfrontCost,
      monthlySavings,
    });
  };

  return (
    <main className="solar-calculator">
    <div className="calculator-container">
      <h2>Solar Savings Calculator</h2>

      <input
        type="number"
        placeholder="Monthly Electricity Bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <input
        type="number"
        placeholder="Roof Size (sqm)"
        value={roofSize}
        onChange={(e) => setRoofSize(e.target.value)}
      />

      <button onClick={calculateSolar}>
        Calculate
      </button>

      {result && (
        <div className="results">
          <h3>Estimated Results</h3>

          <p>
            Solar System Size: {result.systemSize} kW
          </p>

          <p>
            Upfront Cost: ₦{result.upfrontCost}
          </p>

          <p>
            Monthly Savings: ₦{result.monthlySavings}
          </p>

          <button>
            Get Quotes Based on This Estimate
          </button>
        </div>
      )}
    </div>
    </main>
  );
};

export default SolarCalculator;