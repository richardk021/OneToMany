import React from 'react';
import './BalanceTracker.css';

interface BalanceTrackerProps {
  balance: number;
}

const BalanceTracker: React.FC<BalanceTrackerProps> = ({ balance }) => {
  return (
    <div className="balanceTracker">
      <h2>Balance Tracker</h2>
      <p>Current Balance: ${balance}</p>
    </div>
  );
};

export default BalanceTracker;