import React, { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import style from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CounterType = DefaultButtonPropsType & {
    buttonStatus1: boolean
    buttonStatus2: boolean
    incHandler: () => any
    resetHandler: () => any
}


export const Button: React.FC<CounterType> = ({ buttonStatus1, buttonStatus2, incHandler, resetHandler, ...restProps }) => {
    return (
        <div>
            <button disabled={buttonStatus1} onClick={resetHandler} className={style.button} {...restProps}>reset</button>
            <button disabled={buttonStatus2} onClick={incHandler} className={style.button}  {...restProps}>inc</button>
        </div>
    )
}


