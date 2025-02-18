import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center w-full text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="text-6xl font-bold"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Pomotive
            </motion.div>

            <motion.hr
                className="bg-black w-[80%] h-[2px] mt-2 mb-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            <motion.div
                className="text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                Pomodoro Timer for Productivity
            </motion.div>
        </motion.div>
    );
}

export default Header
