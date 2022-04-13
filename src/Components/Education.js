import React from 'react';
import '../css/Edu.css';
import {
    Link,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonMain from './Buttons/buttonMain';

function Education () {
    const educationProgress = [
        {
            institution: '8-ой лицей "Олимпия"',
            degree: 'Аттестат о среднем общем образовании',
            dates: '2004 - 2015'
        },
        {
            institution: 'EU Business School Munich',
            degree: 'Финансовый Аналитик',
            dates: '2015 - 2017'
        },
        {
            institution: 'University of Roehampton London',
            degree: 'Бакалавр в Международном Бизнесе',
            dates: '2017 - 2018'
        }
    ]
    
    const list = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                when: "beforeChildren",
                staggerChildren: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const itemDown = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -200 },
        transition: { duration: 0.8 }        
    }
    const itemLeft = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
        
    }
    const itemRight = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
        
    }
    const itemPop = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
        
    }

    const pageAni = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "100vh" },
        exit: {opacity: 0, x: "-100vh"},
        transition: { duration: 1.5 }        
    }

    return(
        <AnimatePresence exitBeforeEnter>
            <div className='wrapperEverything'>
                <motion.div className="wrapperEdu" key={uuidv4()} variants={pageAni} initial="hidden" animate="visible" exit="exit" transition={pageAni.transition}>
                    <motion.div className="flexColumnEdu width90 " variants={list} initial="hidden" animate="visible">
                        <motion.h1 className="mainText" variants={itemPop} transition={itemPop.transition}> Образование </motion.h1>
                        {educationProgress.map((object) =>
                            <motion.div key={uuidv4()} className="card" variants={itemDown} transition={itemDown.transition}>
                                <motion.p className="mainText">{object.institution}</motion.p>
                                <motion.p className="secondaryText">{object.degree}</motion.p>
                                <motion.p className="dates">{object.dates}</motion.p>
                            </motion.div>
                        )}  
                            <Link to="/" className="end"><ButtonMain><p>На главную</p></ButtonMain></Link>     
                        </motion.div>      
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Education;