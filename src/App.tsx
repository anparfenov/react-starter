import React from 'react';

export default function App() {
    const [counter, setCounter] = React.useState(0);
    function inc() {
        setCounter(counter + 1);
    }
    function dec() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <button onClick={inc}>
                inc
            </button>
            <button onClick={dec}>
                dec
            </button>
            { counter }
        </div>
    )
}
