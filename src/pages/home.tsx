// pages/HomePage.tsx

import React, { useState } from 'react';
import BalanceTracker from './BalanceTracker';
import './home.css';
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { incrementByAmount } from '../state/Balance/balanceSlice';

const currentDate: Date = new Date();
const formatter1 = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' , day: 'numeric' });
const formattedDate1: string = formatter1.format(currentDate);

const HomePage = () => {
  const balance = useSelector((state: RootState) => state.balance.value);
  let prevBalance: number;
  const dispatch = useDispatch();
  const [transactionName, setTransactionName] = useState<string>('');
  const [transactionAmount, setTransactionAmount] = useState<string>('');
  const [transactionDate] = useState<string>(formattedDate1);
  const [transactionHistory, setTransactionHistory] = useState<{
    amount: string;
    name: string;
    date: string;
    isPositive: boolean;
  }[]>([]);

  const handleAddTransaction = () => {
    const amount = parseFloat(transactionAmount);
    const name = transactionName;
    const date = transactionDate;

    if (!isNaN(amount)) {
      const isPositive = amount > 0;
      prevBalance = balance;

      dispatch(incrementByAmount(amount));

      setTransactionHistory((prevHistory) => [
        { amount: `${isPositive ? '+' : '-'}$${Math.abs(amount)}`, isPositive, name, date },
        ...prevHistory,
      ]);
      setTransactionAmount('');
      setTransactionName('');
    }
  };

  return (
    <div className="homePage">
      <h1>Welcome to One to Many!</h1>
      <BalanceTracker balance={balance} />
      <div className="transactionSection">
        <h2>Log your transaction!</h2>
        <div className='transactions-name'>
          <input
            type="text"
            placeholder="Enter transaction source"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>
        <div className='transactions-amount'>
          <input
            type="number"
            placeholder="Enter amount (positive or negative)"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
        <h3>My Transactions:</h3>
        <ul className='history'>
          {transactionHistory.map((transaction, index) => (
            <li className='history-content' key={index}>
              <div className='content-name'>
                {transaction.name}
              </div>
              <div className='content-date'>
                {transaction.date}
              </div>
              <div className='content-amount'>
                {transaction.amount}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
