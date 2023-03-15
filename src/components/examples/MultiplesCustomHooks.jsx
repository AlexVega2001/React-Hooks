import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../useEffect/effect.css';

export const MultiplesCustomHooks = () => {

    const state = useFetch('https://my-json-server.typicode.com/AlexVega2001/jsonServerFake/files');
    
    console.log(state);

    return (
        <div>
            <h1>CustomHooks!!</h1>
        </div>
    )
}
