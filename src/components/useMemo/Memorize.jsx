import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './memo.css';

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize - Counter: <Small value={ counter } /></h1>
            <hr />

            <button className="btn btn-outline-primary" onClick={ increment }>
                <span>+ 1</span>
            </button>

            <button className="btn btn-outline-secondary ml-3" onClick={ () => {
                setShow(!show)
            } }>
                <span>SHOW/HIDE { JSON.stringify(show) }</span>
            </button>

        </div>
    )
}
