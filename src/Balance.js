import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import Balance from './Balance';
import Movements from './Movements';
import Summary from './Summary';
import Operations from './Operations';
import LoginForm from './LoginForm';
import "./style.css";

function App1() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy data (Replace with your actual data)
  const accounts = [
    {
      owner: "Saptak Singha",
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2,
      pin: 1111,
      currency: "INR",
    },
    // Add other accounts as needed
  ];

  const handleLogin = (username, pin) => {
    const account = accounts.find(acc => acc.owner.toLowerCase() === username.toLowerCase() && acc.pin === parseInt(pin));
    if (account) {
      setCurrentAccount(account);
      setIsLoggedIn(true);
    } else {
      // Handle invalid login
    }
  };

  return (
    <div className="App">
      <Navigation />
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Balance />
          <Movements />
          <Summary />
          <Operations />
        </>
      )}
    </div>
  );
}

export default App1;
