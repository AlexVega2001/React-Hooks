import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter} from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://my-json-server.typicode.com/AlexVega2001/jsonServerFake/files/${counter}`);

    const { description } = !!data && data;

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [description])

    return (
      <>
        <h1> Layout Effect </h1>
        <hr />
        <figure className="text-end">
          <blockquote className="blockquote">
            <p ref={pTag}>{description}</p>
          </blockquote>
        </figure>

        <pre>
            { JSON.stringify(boxSize, null, 3) }
        </pre>

        <button className="btn btn-primary" onClick={increment}>
          <span>Siguiente</span>
        </button>
      </>
    );
}
