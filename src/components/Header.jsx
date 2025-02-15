import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-sky-100'>
            <div className='text-6xl font-bold'>
                Pomotive
            </div>
            <div className='text-xl'>
                Pomodoro Timer for Productivity
            </div>
        </div>
    )
}

export default Header
