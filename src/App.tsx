import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter/Counter';

const App = () => {

  let initialValue = 0;
  const [value, setValue] = useState<number>(initialValue)

  const [buttonStatus1, setIncrementButton] = useState<boolean>(true)
  const [buttonStatus2, setResetButton] = useState<boolean>(false)
  const maxNum = 5;

  const incHandler = () => {
    setButtonStatus()
    if (value < maxNum) {
      setValue(value + 1)
    }
  }
  const setButtonStatus = () => {
    if (value === initialValue) {
      setIncrementButton(false)
    }
    if (value === (maxNum - 1)) {
      setResetButton(true)
    }
  }
  const resetHandler = () => {
    setValue(0)
    setIncrementButton(true)
    setResetButton(false)
  }

  return (
    <div className="App">
      <Counter
        value={value}
        maxNum={maxNum}
        buttonStatus1={buttonStatus1}
        buttonStatus2={buttonStatus2}
        incHandler={incHandler}
        resetHandler={resetHandler}
      />
    </div>
  );
}

export default App;
