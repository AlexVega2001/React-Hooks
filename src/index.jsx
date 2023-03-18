import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Layout } from './components/useLayoutEffect/Layout';
import { Memorize } from './components/useMemo/Memorize';
// import { MultiplesCustomHooks } from './components/examples/MultiplesCustomHooks';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { RealExampleRef } from './components/useRef/RealExampleRef';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { Hooks } from './Hooks';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Memorize />
    </React.StrictMode>
);

