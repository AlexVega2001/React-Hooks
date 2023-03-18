import React, { useState } from 'react';
import { MultiplesCustomHooks } from '../examples/MultiplesCustomHooks';
import './useRef.css';

export const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr />

        { show && <MultiplesCustomHooks /> }
        <br />
        <button className="btn btn-primary mt-4"
                onClick={() => {
                  setShow( !show );
                }}>
          <span>Show/Hide</span>
        </button>

    </div>
  )
}
