import React from 'react';
import { Button } from '../Buttons/Button';
import style from './Counter.module.css';

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
                    <Button
                        buttonStatus1={buttonStatus1}
                        buttonStatus2={buttonStatus2}
                        incHandler={incHandler}
                        resetHandler={resetHandler} />
                </div>
            </div>
        </div>
    );
}