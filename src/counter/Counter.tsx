import React, { useState } from 'react';
import style from './counter.module.css';

export const Counter = () => {
    let [value, setValue] = useState<number>(0)
    let [buttonStatus1, setIncrementButton] = useState<boolean>(true)
    let [buttonStatus2, setResetButton] = useState<boolean>(false)
    const maxNum = 5;


    const incHandler = () => {

        setButtonStatus()
        if (value < maxNum) {
            setValue(value + 1)
        }
    }

    const setButtonStatus = () => {

        if (value === 0) {
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
    const ifMaxNum = (value === maxNum) ? style.max_num : ''


    return (
        <div className={style.item}>
            <div className={style.counter}>
                <h1 className={`${ifMaxNum} ${style.head} `}>{value}</h1>
                <div className={style.body}>
                    <button disabled={buttonStatus1} onClick={resetHandler} className={style.button}>reset</button>
                    <button disabled={buttonStatus2} onClick={incHandler} className={style.button}>inc</button>
                </div>
            </div>
        </div>
    );
}