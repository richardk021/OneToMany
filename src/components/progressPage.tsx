import React, { useState } from 'react';
import './progress.css';

interface HistoryEntry {
  month: string;
  spending: number;
  earning: number;
}

const ProgressPage: React.FC = () => {
  const [savingsObjective, setSavingsObjective] = useState<string>('');
  const [savingsAmount, setSavingsAmount] = useState<number | undefined>(undefined);
  const [spendingData] = useState<number[]>([1000, 2000, 1500, 2500, 1800, 2000, 1700, 2200, 1900, 2300, 2000, 2500]);
  const [earningData] = useState<number[]>([2000, 2500, 1800, 2200, 2800, 2600, 2800, 2300, 2700, 2400, 3000, 2800]);
  const [historyData] = useState<HistoryEntry[]>([
    { month: 'January', spending: 1000, earning: 2000 },
    { month: 'February', spending: 2000, earning: 2500 },
    { month: 'March', spending: 1500, earning: 1800 },
    { month: 'April', spending: 2500, earning: 2200 },
    { month: 'May', spending: 1800, earning: 2800 },
    { month: 'June', spending: 2000, earning: 2600 },
    { month: 'July', spending: 1700, earning: 2800 },
    { month: 'August', spending: 2200, earning: 2300 },
    { month: 'September', spending: 1900, earning: 2700 },
    { month: 'October', spending: 2300, earning: 2400 },
    { month: 'November', spending: 2000, earning: 3000 },
    { month: 'December', spending: 2500, earning: 2800 },
  ]);

  const handleSetSavings = () => {
    // Perform any validation if needed
    // For simplicity, we assume the input is valid
    // You may want to add more complex validation logic
    setSavingsObjective('Vacation Fund'); // Example name
    setSavingsAmount(2000); // Example amount
  };

  const calculateProgressBar = () => {
    if (savingsAmount === undefined || savingsAmount <= 0) {
      return 0;
    }
    return (savingsAmount / 5000) * 100; // Assuming a maximum savings objective of $5000
  };

  return (
    <div className="progressPage">
      <h1>Progress Page</h1>
      <div className="savingsObjective">
        <h2>Savings Objective</h2>
        <input
          type="text"
          placeholder="Enter objective name"
          value={savingsObjective}
          onChange={(e) => setSavingsObjective(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter savings amount"
          value={savingsAmount === undefined ? '' : savingsAmount}
          onChange={(e) => setSavingsAmount(Number(e.target.value))}
        />
        <div className="progressBarContainer">
          <div className="progressBar" style={{ width: `${calculateProgressBar()}%` }}></div>
        </div>
        <p>Amount: ${savingsAmount}</p>
        <button onClick={handleSetSavings}>Set Savings</button>
      </div>
      <div className="lineGraphContainer">
        {/* Implement your line graph component here */}
        {/* For simplicity, let's just display the data as text */}
        <div className="spendingData">Spendings: {spendingData.join(', ')}</div>
        <div className="earningData">Earnings: {earningData.join(', ')}</div>
      </div>
      <div className="historyList">
        <h2>Previous Month History</h2>
        <ul>
          {historyData.map((entry, index) => (
            <li key={index}>
              <span>{entry.month}</span>
              <span>Spendings: ${entry.spending}</span>
              <span>Earnings: ${entry.earning}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressPage;
