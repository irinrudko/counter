import React from 'react';
import style from './counter.module.css';

export type CounterType = {
    value: number
    maxNum: number
    buttonStatus1: boolean
    buttonStatus2: boolean
    incHandler: () => void
    resetHandler: () => void
}

export const Counter: React.FC<CounterType> = ({ value, maxNum, buttonStatus1, buttonStatus2, incHandler, resetHandler }) => {
    const ifMaxNum = (value === maxNum) ? style.max_num : ''

    return (
        <div className={style.item}>
            <div className={style.counter}>
                <h1 className={`${ifMaxNum} ${style.head}`}>{value}</h1>
                <div className={style.body}>
                    <button disabled={buttonStatus1} onClick={resetHandler} className={style.button}>reset</button>
                    <button disabled={buttonStatus2} onClick={incHandler} className={style.button}>inc</button>
                </div>
            </div>
        </div>
    );
}