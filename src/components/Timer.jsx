import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


let timeduration = { min: 25, sec: 0 }

const Timer = () => {
    const [resetShow, setResetShow] = useState(false)
    const [timerMode, setTimerMode] = useState('Start')
    const [curMode, setCurMode] = useState('pomodoro')
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
                            setTimerMode('Start')
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
                setCurMode('break');
                break;
            case 'pomodoro':
                timeduration = { min: 25, sec: 0 };
                setCurMode('pomodoro');
                break;
            case 'longbreak':
                timeduration = { min: 15, sec: 0 };
                setCurMode('long break');
                break;

            default:
                break;
        }

        if (e.target.className === 'border-2 border-black px-3 rounded-full hover:cursor-pointer') {
            e.target.className = `border-2 border-black px-3 rounded-full hover:cursor-pointer bg-blue-500 text-white`;
        }
        else if (e.target.className === `border-2 border-black px-3 rounded-full hover:cursor-pointer bg-blue-500 text-white`) {
            e.target.className = 'border-2 border-black px-3 rounded-full hover:cursor-pointer';
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
        setResetShow(true)
    }

    const toggleReset = () => {
        setResetShow(false)
        setTimer(false)
        setTimerMode('Start')
        setMinutes(timeduration.min)
        setSeconds(timeduration.sec)
    }

    return (
        <>
            <div className='flex flex-col items-center w-[100%] text-white'>
                <div className='w-fit flex gap-10 justify-center items-center'>
                    <motion.button onClick={setTime} name='break' className='gmb border-2 border-gray-500 px-3 rounded-full w-28 hover:cursor-pointer'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}>
                        Break
                    </motion.button>
                    <motion.button onClick={setTime} name='pomodoro' className='gmb border-2 border-gray-500 px-3 rounded-full w-28 hover:cursor-pointer'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}>
                        Pomodoro
                    </motion.button>
                    <motion.button onClick={setTime} name='longbreak' className='gmb border-2 border-gray-500 px-3 rounded-full w-28 hover:cursor-pointer'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Long Break
                    </motion.button>
                </div>
                <motion.div className='flex justify-center items-center w-[100%] h-max my-2 gap-5 p-5 text-white'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}>
                    <div className='gmb timerContent text-center text-8xl font-bold border-2 w-xl h-52 rounded-4xl flex flex-col justify-center items-center'>
                        {timerMinutes}:{timerSeconds}
                        <AnimatePresence mode="wait">
                            <motion.div className='top-10 text-3xl'
                                key={curMode}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}>
                                {curMode}</motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <motion.button onClick={toggleStartPause} className='text-xl gmb border-2 border-gray-500 px-10 rounded-full hover:cursor-pointer'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.3 }}>
                        {timerMode}
                    </motion.button>
                    <AnimatePresence>
                        {resetShow ? <motion.button onClick={toggleReset}
                            className='gmb border-2 border-gray-500 px-5 rounded-full hover:cursor-pointer w-fit'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            whileHover={{ scale: 1.1 }}>
                            Reset
                        </motion.button> : ""}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

export default Timer
