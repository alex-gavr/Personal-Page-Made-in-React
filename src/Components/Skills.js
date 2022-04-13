import React from 'react';
import '../css/Edu.css';
import {
    Link,
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonMain from './Buttons/buttonMain';


function Skills () {
    const skill = [
        {
            topic: 'Фронт-Енд Разработка',
            components: [
                {
                    name: "HTML", 
                    level: "80%"
                },
                {
                    name: "CSS", 
                    level: "80%"
                },
                {
                    name: "JavaScript", 
                    level: "70%"
                },
                {
                    name: "ReactJS", 
                    level: "70%"
                }
            ]
        },
        {
            topic: 'Онлайн Маркетинг',
            components: [
                {
                    name: "Traffic Optimisation", 
                    level: "90%"
                },
                {
                    name: "MediaBuy", 
                    level: "80%"
                },
                {
                    name: "Email Marketing", 
                    level: "80%"
                },
                {
                    name: "SEO", 
                    level: "40%"
                },
                {
                    name: "SMM", 
                    level: "50%"
                },
                {
                    name: "Web Content", 
                    level: "90%"
                },
                {
                    name: "Copywriting", 
                    level: "50%"
                }
            ]
        },
        {
            topic: 'Финансовый Анализ',
            components: [
                {
                    name: "Анализ финансового состояния предприятия", 
                    level: "90%"
                }
            ]
        },
        {
            topic: 'Межличностные навыки',
            components: [
                {
                    name: "Обмен информацией в письменной и устной форме", 
                    level: "90%"
                },
                {
                    name: "Умением слушать", 
                    level: "100%"
                },
                {
                    name: "Сдерживание эмоций", 
                    level: "90%"
                },
                {
                    name: "Управление конфликтными ситуациями", 
                    level: "40%"
                },
                {
                    name: "Создание доверия", 
                    level: "80%"
                },
                {
                    name: "Ведение переговоров", 
                    level: "60%"
                }
            ]
        },
        {
            topic: 'Программы',
            components: [
                {
                    name: "Adobe Photoshop", 
                    level: "90%"
                },
                {
                    name: "Canva", 
                    level: "90%"
                },
                {
                    name: "SPSS", 
                    level: "50%"
                },
                {
                    name: "Microsoft Office", 
                    level: "90%"
                },
                {
                    name: "Mac OS", 
                    level: "100%"
                },
                {
                    name: "Windows OS", 
                    level: "100%"
                }
            ]
        },
        {
            topic: 'Языки',
            components: [
                {
                    name: "Русский", 
                    level: "100%"
                },
                {
                    name: "Английский", 
                    level: "90%"
                },
                {
                    name: "Немецкий", 
                    level: "50%"
                }
            ]
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

    const itemUp = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
        transition: { duration: 0.8 }        
    }
    const itemDown = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -200 },
        transition: { duration: 0.8 }        
    }
    const itemLeft = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
        transition: { duration: 1.5 }
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


    return(
        <AnimatePresence exitBeforeEnter>
            <div className='wrapperEverything'>
                <motion.div className="wrapperEdu" key={uuidv4()} variants={pageAni} initial="hidden" animate="visible" exit="exit" transition={pageAni.transition}>
                    <motion.div className="flexColumnEdu width90 " variants={list} initial="hidden" animate="visible">
                        <motion.h1 className="mainTextSkills" variants={itemPop} transition={itemPop.transition}> Навыки и Языки </motion.h1>
                        {skill.map((object, i) =>
                            <motion.div key={uuidv4()} className="card" variants={itemUp} transition={itemUp.transition}>
                                <h3 className="mainText">{object.topic}</h3>
                                {skill[i].components.map((object) =>
                                <motion.div key={uuidv4()} className="component"> 
                                    <p className="secondaryText">{object.name}</p>
                                    <div className='level'>
                                        <motion.p className="dates" variants={itemLeft} transition={itemLeft.transition}>Начинающий</motion.p>
                                        <motion.p className="dates" variants={itemRight} transition={itemRight.transition}>Эксперт</motion.p>
                                    </div>                                   
                                    <span className='progressBar'>
                                            <motion.span 
                                                className='progression'
                                                whileInView={{ width: object.level}} 
                                                transition={{duration: 1.3, delay: 2}}
                                                viewport={{ once: true }}
                                            >
                                            </motion.span>
                                    </span>
                                </motion.div>
                                )}
                            </motion.div>
                        )}  
                            <Link to="/" className="endSkills"><ButtonMain><p>На главную</p></ButtonMain></Link>     
                        </motion.div>      
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Skills;