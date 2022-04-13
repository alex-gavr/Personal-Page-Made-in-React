import React from 'react';
import '../css/Edu.css';
import {
    Link,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonMain from './Buttons/buttonMain';


function WorkExperience () {

    const job = [
        {
            place: 'РоссельхозБанк',
            position: 'Финансовый аналитик крупных юр. лиц',
            dates: 'Февраль 2020 - Ноябрь 2021'
        },
        {
            place: 'AdTech: PropellerAds',
            position: 'Оптимизатор трафика',
            dates: 'Ноябрь 2021 - Сейчас'
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
                    <motion.div className="flexColumnEdu width90" variants={list} initial="hidden" animate="visible">
                        <motion.h1 className="mainText" variants={itemDown} transition={itemDown.transition}> Опыт Работы </motion.h1>
                        {job.map((object) =>
                            <motion.div key={uuidv4()} className="card" variants={itemDown} transition={itemDown.transition}>
                                <motion.p className="mainText">{object.place}</motion.p>
                                <motion.p className="secondaryText">{object.position}</motion.p>
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

export default WorkExperience;