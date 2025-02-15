import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Timer = () => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [timer, setTimer] = useState(false)

    useEffect(() => {
        if (timer) {
            let interval = setInterval(() => {
                clearInterval(interval);

                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        setMinutes(25);
                        setSeconds(0);
                        setTimer(false)
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <>
            <div className='flex flex-col justify-center items-center w-[100%]'>
                <div className='timerContent text-center'>
                    {timerMinutes}:{timerSeconds}
                </div>
            </div>
        </>
    )
}

export default Timer
