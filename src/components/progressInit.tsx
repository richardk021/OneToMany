import React, { useState } from 'react';
import './progress.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setSavings, setObjective} from '../state/Savings/savingsSlice';

const ProgressInit: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let tempBal= 0;
  let tempObj= '';

  const handleSetObj = () => {  
    if (!isNaN(tempBal) && tempObj !== '') {
      dispatch(setObjective(tempObj))
      dispatch(setSavings(tempBal));
      navigate('/progress');
    }
  };

  return (
    <div className="main">
      <div className='objective-input'>
          <input
            type="string"
            placeholder="Enter savings name"
            onChange={(e) => tempObj = e.target.value}
          />
      </div>
      <div className='savings-input'>
          <input
            type="number"
            placeholder="Enter savings amount"
            onChange={(e) => tempBal = e.target.valueAsNumber}
          />
      </div>
      <button onClick={handleSetObj}>Set New Objective!</button>
    </div>
  );
};

export default ProgressInit;
