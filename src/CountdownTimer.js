import React, { useState, useEffect } from 'react';
import './styles.css'; 
const CountdownTimer = () => {
    const [time, setTime] = useState(0); // State for countdown time
    const [timerId, setTimerId] = useState(null); // State to hold timer ID
    const [isRunning, setIsRunning] = useState(false); // State to track if timer is running

    // Function to handle time change
    const handleTimeChange = (event) => {
        setTime(parseInt(event.target.value));
    };

    // Function to start the countdown timer
    const startTimer = () => {
        if (time > 0 && !isRunning) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
            setTimerId(timer);
            setIsRunning(true);
        }
    };

    // Function to stop the countdown timer
    const stopTimer = () => {
        clearInterval(timerId);
        setTimerId(null);
        setIsRunning(false);
    };

    useEffect(() => {
        if (time === 0 && isRunning) {
            stopTimer();
        }
    }, [time, isRunning]);

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Countdown Timer</h2>
            <input
                type="number"
                value={time}
                onChange={handleTimeChange}
                style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button onClick={startTimer} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Start</button>
            <button onClick={stopTimer} style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Stop</button>
            <div style={{ fontSize: '18px', marginTop: '20px' }}>Current Time: {time}</div> {/* Display current countdown time */}
        </div>
    );
};

export default CountdownTimer;
