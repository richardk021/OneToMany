// pages/HomePage.tsx

import React, { useState } from 'react';
import './LoginMain.css';
import { useNavigate} from 'react-router-dom';

const LoginMain: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const navigate = useNavigate();

  const handleSetBal = () => {  
    if (!isNaN(balance)) {
      const isPositive = balance > 0;

      if(isPositive == true) {
        navigate("/")
      }
    }
  };

  return (
    <div className="main">
      <h1>Welcome to One to Many!</h1>
        <div className='balance-input'>
          <input
            type="number"
            placeholder="Enter amount"
            value={balance}
            onChange={(e) => setBalance(e.target.valueAsNumber)}
          />
          <button onClick={handleSetBal}>Set Balance</button>
      </div>
    </div>
  );
};

export default LoginMain;
