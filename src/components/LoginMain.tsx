// pages/HomePage.tsx

import React, { useState } from 'react';
import './LoginMain.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setBalance } from '../state/Balance/balanceSlice';


const LoginMain: React.FC = () => {
  // const balance = useSelector((state: RootState) => state.balance.value);;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let tempBal= 0;

  const handleSetBal = () => {  
    if (!isNaN(tempBal)) {
      dispatch(setBalance(tempBal));
      navigate('/home');
    }
  };

  return (
    <div className="main">
      <h1>Welcome to One to Many!</h1>
        <div className='balance-input'>
          <input
            type="number"
            placeholder="Enter amount"
            onChange={(e) => tempBal = e.target.valueAsNumber}
          />
          <button onClick={handleSetBal}>Set Balance</button>
      </div>
    </div>
  );
};

export default LoginMain;
