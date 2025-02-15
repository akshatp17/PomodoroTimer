import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Timer = () => {

    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(3)
    const [timer, setTimer] = useState(false)

    useEffect(() => {
        if (!timer) return;

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    setMinutes((prevMinutes) => {
                        if (prevMinutes === 0) {
                            clearInterval(interval);
                            setTimer(false);

                            return 0;
                        }
                        return prevMinutes - 1;
                    });
                        return 59;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const toggleStartPause = () => {
        setTimer(!timer)
    }

    const toggleReset = () => {
        setTimer(false)
        setMinutes(25)
        setSeconds(0)
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-[100%]'>
                <div>
                    <button>Break</button>
                    <button>Pomodoro</button>
                    <button>Long Break</button>
                </div>
                <div className='timerContent text-center text-6xl font-bold'>
                    {timerMinutes}:{timerSeconds}
                </div>
                <button onClick={toggleStartPause} className='hover:cursor-pointer'>Start</button>
                <button onClick={toggleReset} className='hover:cursor-pointer'>Reset</button>
            </div>
        </>
    )
}

export default Timer
