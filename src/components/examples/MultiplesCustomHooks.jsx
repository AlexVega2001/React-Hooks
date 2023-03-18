import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter} from '../../hooks/useCounter';
import '../useEffect/effect.css';

export const MultiplesCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://my-json-server.typicode.com/AlexVega2001/jsonServerFake/files/${counter}`);

    const { description, url } = !!data && data;

    // console.log(description, url);

    return (
      <>
        <h1> Programming Books </h1>
        <hr />
        {
            loading 
            ? 
                (
                <div className="alert alert-info text-center">Loading...</div>
                ) 
            : 
                (
                <figure className="text-end">
                    <blockquote className="blockquote">
                    <p>{description}</p>
                    </blockquote>
                    <footer className="blockquote-footer">{url}</footer>
                </figure>
                )
        }

        <button className="btn btn-primary" onClick={increment}>
          <span>Siguiente</span>
        </button>
        
      </>
    );
}
