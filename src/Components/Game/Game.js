import React, {useState} from 'react';
import '../../css/Game.css';
import {
    Link
} from "react-router-dom";
import { motion } from "framer-motion";
import { pics } from './pics';
import { v4 as uuidv4 } from 'uuid';

function Game () {

    const [showGreetings, SetShowGreetings] = useState(true);
    const [firstPicture, SetFirstPicture] = useState(0);
    const [secondPicture, SetSecondPicture] = useState(1);
    const [win, SetWin] = useState(false);
    const [winCount, SetWinCount] = useState(0);

    const list = {
        visible: {
            opacity: 1,
            transition: {
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
    const itemUp = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
        transition: { duration: 1 }        
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

    const handleClick = () => {
        let firstRandomNumber = Math.floor(Math.random()*45);
        let secondRandomNumber = Math.floor(Math.random()*45);
        console.log(firstRandomNumber, secondRandomNumber);
        SetFirstPicture(firstRandomNumber);
        SetSecondPicture(secondRandomNumber);
        if (firstRandomNumber === secondRandomNumber) {
            SetWin(true);
            SetWinCount(winCount+1);
        } else {
            SetWin(false);
        }
    }

    const Greetings = () => {
        const list = {
            visible: {
                opacity: 1,
                transition: {
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
        const emojiAni = {
            initial: {opacity: 0, x: 200},
            animate: {opacity: 1, rotate: -360, x: 0 },
            transition: { type: "spring", duration: 5, bounce: 0.6 }
        }
        return(
            <motion.div variants={list} initial="hidden" animate="visible" className="wrapFinalGreetings">
                <motion.h1 variants={itemLeft} className="mainText">Привет!</motion.h1>
                <motion.span 
                    variants={emojiAni} 
                    initial={emojiAni.initial} 
                    animate={emojiAni.animate} 
                    transition={emojiAni.transition}
                    className="emoji" 
                    role="img" 
                    aria-label="Left Arrow"
                >
                    👋
                </motion.span>
                <motion.p variants={itemLeft} className="secondaryAction" > Добро пожаловать в мини игру! 
                <br />Попробуй собрать две одинаковые фотки
                <br />И получишь сюрприз 😏
                </motion.p>
                <motion.p variants={itemRight} className="mainText">Удачи <span role="img" aria-label="Left Arrow">😌</span></motion.p>              
                <motion.button
                variants={itemPop} 
                whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} 
                className="mainButton height50" 
                onClick={handleShowGame}
                key={uuidv4()}
                > Давай Попробую 
                </motion.button>
            </motion.div>
        )
    }
    const handleShowGame = () => {
        SetShowGreetings(false)
    }

    return(
        <motion.div className="wrapperEverythingGame">
            {showGreetings ?
            <Greetings />
            :
            <motion.div className='wrapperGame' variants={list} initial="hidden" animate="visible">
                <motion.h1 className='secondaryAction' style={{margin: 10}} variants={itemUp} transition={itemUp.transition} >Количество раз ты выиграл: {winCount}</motion.h1>          
                <motion.div className='picturesContainer' variants={itemUp} transition={itemUp.transition}>
                    <div className='picContainer'variants={itemLeft}>
                        <img className='picGame' src={pics[firstPicture].photo} alt="picture of me" />
                    </div>
                    <div className='picContainer' variants={itemRight}>
                        <img className='picGame' src={pics[secondPicture].photo} alt="picture of me" />
                    </div>
                </motion.div>
                <div className='buttonsContainer'>
                    
                    {
                    win ? 
                        <motion.a
                        variants={itemPop} 
                        initial="hidden" 
                        animate="visible" 
                        transition={itemUp.transition}
                        className='prizeButton' 
                        whileHover={{scale: 1.2}} 
                        whileTap = {{scale: 0.8}}
                        href="https://www.tinkoff.ru/cf/2FOM2MBPxnK">
                            <span className='emoji'>🎁</span>
                        </motion.a>
                    :
                    null
                    }
                    
                </div>
                <Link to="/">
                    <motion.span 
                        variants={itemLeft} 
                        transition={itemUp.transition}
                        className=" emoji returnButtonGame" 
                        whileHover={{scale: 1.2}} 
                        whileTap = {{scale: 0.8}}
                    > 
                    ⬅️
                    </motion.span>
                </Link>
                <motion.span
                    variants={itemRight} 
                    transition={itemUp.transition}
                    className='emoji roll' 
                    whileHover={{scale: 1.2}} 
                    whileTap = {{scale: 0.8}}
                    onClick={handleClick}
                >
                    🔁
                </motion.span>
            </motion.div>
            }
        </motion.div>
    );
}

export default Game;