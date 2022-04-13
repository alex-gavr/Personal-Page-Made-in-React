import React, {useState, useEffect} from 'react';
import '../css/Edu.css';
import {
    Link,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence, filterProps } from 'framer-motion';
import ButtonMain from './Buttons/buttonMain';

function Hobbies (props) {

    const [dragging, SetDragging] = useState(false);
    const [number, SetNumber] = useState(1);

    const hobby = [
        {
            id: 1,
            emoji: '🏃‍♂️',
            name: 'Бег',
            dates: 'с Февраля 2019'
        },
        {
            id: 2,
            emoji: '👨‍💻',
            name: 'Программирование',
            dates: 'с Августа 2021'
        },
        {
            id: 3,
            emoji: '🎮',
            name: 'Видео Игры',
            dates: 'с Рождения'
        },
        {
            id: 4,
            emoji: '✨',
            name: 'Наблюдение за звездами',
            dates: 'с Ноября 2021'
        },
        {
            id: 5,
            emoji: '🏓',
            name: 'Пинг Понг',
            dates: 'с Рождения'
        },
        {
            id: 6,
            emoji: '⛷',
            name: 'Лыжи',
            dates: 'с Рождения'
        },
        {
            id: 7,
            emoji: '🔫',
            name: 'Стрельба из оружия',
            dates: 'с Рождения'
        },
        {
            id: 8,
            emoji: '💰',
            name: 'Инвестиции',
            dates: 'с Мая 2020'
        }
    ]

    const list = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                when: "beforeChildren",
                staggerChildren: 1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }

    const hobbiesDiv = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                when: "beforeChildren",
                staggerChildren: 0.2,
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
    const itemUp = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
        transition: { duration: 0.8 }        
    }
    const itemLeft = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
        transition: { duration: 0.5 }
    }
    const itemRight = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
        transition: { duration: 1.5 }
    }
    const itemPop = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
        transition: { duration: 0.8 }
    }

    const pageAni = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "100vh" },
        exit: {opacity: 0, x: "-100vh"},
        transition: { duration: 1.5 }        
    }

    const toggleDragging = (key) => {
        SetNumber(key)
        SetDragging(prevDragging => !prevDragging);
    }

    return(
        <AnimatePresence exitBeforeEnter>
            <div className='wrapperEverything'>
                <motion.div 
                    className="wrapperEdu" 
                    variants={ pageAni } 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    transition={pageAni.transition}
                >
                    <motion.div className="flexColumnHobbies width90" variants={list} initial="hidden" animate="visible">
                        <motion.h1 className="mainTextHobby" variants={itemDown} transition={itemDown.transition}> Хобби </motion.h1>
                        <motion.h3 className="secondaryTextVariant" variants={itemDown} transition={itemDown.transition}> Потяни иконку чтобы узнать больше </motion.h3>
                        <motion.div className="flexRow" variants={hobbiesDiv}>
                            {hobby.map((o)=>
                                <motion.div 
                                key={o.id}
                                className='cardHobby' 
                                variants={itemLeft} 
                                transition={itemLeft.transition}
                                drag={true}
                                dragSnapToOrigin={true}
                                whileDrag={{ scale: 1.2 }}
                                onDragStart={ ()=>toggleDragging(o.id-1)}
                                onDragEnd={ ()=>toggleDragging(o.id-1)}
                                dragConstraints={{ left: 20, top:20, right: 20, bottom: 20 }}
                                >
                                    <span className='emoji' role="img" aria-label="Man Student">{o.emoji}</span>
                                </motion.div>
                                
                            )}
                        </motion.div>
                        {dragging ? 
                        <motion.div className='descriptionCard' key={uuidv4()} variants={itemUp} initial="hidden" animate="visible" transition={itemUp.transition}>
                            <motion.h1 className='secondaryTextHobby' key={uuidv4()} variants={itemLeft}>{hobby[number].name}</motion.h1>
                            <motion.p className='dates' key={uuidv4()} variants={itemRight}>{hobby[number].dates}</motion.p>
                        </motion.div> 
                        : 
                        null}
                        <Link to="/" className="end"><ButtonMain><p>На главную</p></ButtonMain></Link>
                    </motion.div>           
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Hobbies;