import React from 'react';
import ReactDOM from 'react-dom/client';

import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { Hooks } from './Hooks';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FormWithCustomHook />
    </React.StrictMode>
);

