// pages/HomePage.tsx

import React, { useState } from 'react';
import BalanceTracker from './BalanceTracker';
import './home.css';

const HomePage: React.FC = () => {
  const [balance, setBalance] = useState<number>(1000);
  const [transactionAmount, setTransactionAmount] = useState<string>('');
  const [transactionHistory, setTransactionHistory] = useState<{
    amount: string;
    isPositive: boolean;
  }[]>([]);

  const handleAddTransaction = () => {
    const amount = parseFloat(transactionAmount);

    if (!isNaN(amount)) {
      const isPositive = amount > 0;

      setBalance((prevBalance) => prevBalance + amount);
      setTransactionHistory((prevHistory) => [
        { amount: `${isPositive ? '+' : '-'}$${Math.abs(amount)}`, isPositive },
        ...prevHistory,
      ]);
      setTransactionAmount('');
    }
  };

  return (
    <div className="homePage">
      <h1>Welcome to One to Many!</h1>
      <BalanceTracker balance={balance} />
      <div className="transactionSection">
        <h2>My Transactions:</h2>
        <ul className='history'>
          {transactionHistory.map((transaction, index) => (
            <li key={index} style={{ color: transaction.isPositive ? 'green' : 'red' }}>
              {transaction.amount}
            </li>
          ))}
        </ul>
        <div className='transactions'>
          <input
            type="number"
            placeholder="Enter amount (positive or negative)"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
