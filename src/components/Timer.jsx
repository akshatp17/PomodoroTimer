import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


let timeduration = { min: 0, sec: 3 }

const Timer = () => {

    const [timerMode, setTimerMode] = useState('Start')
    const [minutes, setMinutes] = useState(timeduration.min)
    const [seconds, setSeconds] = useState(timeduration.sec)
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

                    if (minutes === 0) {
                        return 0;
                    }
                    else {
                        return 59;
                    }
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const setTime = (e) => {
        switch (e.target.name) {
            case 'break':
                timeduration = { min: 5, sec: 0 };
                break;
            case 'pomodoro':
                timeduration = { min: 25, sec: 0 };
                break;
            case 'longbreak':
                timeduration = { min: 15, sec: 0 };
                break;

            default:
                break;
        }

        setMinutes(timeduration.min);
        setSeconds(timeduration.sec);
    }


    const toggleStartPause = () => {
        setTimer(!timer)
        if (timer) {
            setTimerMode('Start')
        }
        else {
            setTimerMode('Pause')
        }
    }

    const toggleReset = () => {
        setTimer(false)
        setMinutes(timeduration.min)
        setSeconds(timeduration.sec)
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-[100%] gap-5 p-5'>
                <div className='flex gap-20 justify-center items-center'>
                    <button onClick={setTime} name='break' className='hover:cursor-pointer'>Break</button>
                    <button onClick={setTime} name='pomodoro' className='hover:cursor-pointer'>Pomodoro</button>
                    <button onClick={setTime} name='longbreak' className='hover:cursor-pointer'>Long Break</button>
                </div>
                <div className='timerContent text-center text-6xl font-bold'>
                    {timerMinutes}:{timerSeconds}
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button onClick={toggleStartPause} className='hover:cursor-pointer'>{timerMode}</button>
                    <button onClick={toggleReset} className='hover:cursor-pointer'>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Timer
