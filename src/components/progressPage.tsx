import React, { useState } from 'react';
import './progressPage.css';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

interface HistoryEntry {
  month: string;
  spending: number;
  earning: number;
}

const ProgressPage: React.FC = () => {
  const objectiveName = useSelector((state: RootState) => state.savings.name);
  const objectiveValue = useSelector((state: RootState) => state.savings.value);
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


  return (
    <div className="progressPage">
      <h1>Your Progress</h1>
      <div className='objectiveContainer'>
        <div className='objective-name'>
          {objectiveName}
        </div>
        <div className='objective-value'>
          ${objectiveValue}
        </div>
      </div>

      {/* masih placeholder gw gatau mo bikin gimana */}

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
