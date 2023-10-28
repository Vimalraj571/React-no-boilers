import React, { useState, useEffect } from 'react';

function FunctionalComponent() {
    const [message, setMessage] = useState('Hello, React!');
    const [messageBoolean, setMessageBoolean] = useState(false);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('FunctionalComponent - ComponentDidMount lifecycle method: Component is mounted');
        const interval = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            console.log('FunctionalComponent - ComponentWillUnmount lifecycle method: Component will unmount');
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        console.log('FunctionalComponent - ComponentDidUpdate lifecycle method: Component updated', message);
    }, [message]);

    useEffect(() => {
        console.log('FunctionalComponent - ComponentDidUpdate lifecycle method: Component updated', messageBoolean);
    }, [messageBoolean]);

    const tick = () => {
        setDate(new Date());
    }
    
    const changeMessage = () => {
        setMessage('Updated message');
        setMessageBoolean(!messageBoolean);
    };

    console.log('message', message);

    return (
        <div>
            <h1>Functional Component Simple Example:</h1>
            <p>{message}</p>
            <button onClick={changeMessage}>Change Message</button>
            <div>It is {date.toLocaleTimeString()}.</div>
        </div>
    );
}

export default FunctionalComponent;
