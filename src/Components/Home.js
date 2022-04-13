import React, {useState} from "react";
import '../css/Home.css';
import {
    Link,
} from "react-router-dom";
import {AnimatedPage} from "./animation";
import { motion } from "framer-motion";
import ButtonMain from "./Buttons/buttonMain";
import ButtonSecondary from "./Buttons/buttonSec";
import { imagesForHome } from "./imagesForHomePage";


function Home () { 

    const [picture, SetPicture] = useState(29);

    const handleChangePic = () => {
        let randomNumber = Math.floor(Math.random()*30);
        SetPicture(randomNumber);
    }

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
    const opacityChange = {
        visible: { opacity: 1},
        hidden: { opacity: 0},
        transition: { duration: 1, delay: 1 }        
    }
    const itemDown = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
        transition: { duration: 1 }        
    }
    const movement1 = {
        animate:{
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*10)
        },
        transition: {
            ease: "linear", 
            duration: 2, 
            repeatType: "reverse",
            repeat: Infinity
        }
    }
    const movement2 = {
        animate:{
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*10)
        },
        transition: {
            ease: "linear", 
            duration: 2, 
            repeatType: "reverse",
            repeat: Infinity
        }
    }
    const movement3 = {
        animate:{
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*10)
        },
        transition: {
            ease: "linear", 
            duration: 2, 
            repeatType: "reverse",
            repeat: Infinity
        }
    }
    const movement4 = {
        animate:{
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*10)
        },
        transition: {
            ease: "linear", 
            duration: 2, 
            repeatType: "reverse",
            repeat: Infinity
        }
    }
    const sentence1 = 'Пройди Викторину про меня';
    const sentence2 = 'Или Можешь сыграть в игру';
        return(
            <div className="wrapperEverything">
                <AnimatedPage>
                    <motion.section className="firstSection" variants={list} initial="hidden" animate="visible">
                        <div className="flexColumn">
                        <motion.div className="flexColumn width90 gap20" variants={itemDown} transition={itemDown.transition}>
                            <h1 className="mainText">Привет<span role="img" aria-label="Waving Hand">👋</span>
                            <br />Меня зовут Александр
                            </h1>
                            <p className="secondaryAction">Я занимаюсь Фронт-Енд разработкой и не только 
                            <br />Узнай про меня больше исследуя сайт <span role="img" aria-label="Sparkles">✨</span>
                            </p>
                        </motion.div>
                        <motion.div className="showGrid" variants={itemUp} transition={itemUp.transition}>
                            <Link to="/education"> 
                                <motion.div variants={movement1} animate="animate" transition={movement1.transition} className="item1 navButton emoji" id="first" > 
                                    <span role="img" aria-label="Man Student">👨‍🎓</span>
                                </motion.div>
                            </Link>
                            <Link to="/work-experience">
                                <motion.div variants={movement2} animate="animate" transition={movement2.transition} className="item2 navButton emoji"> 
                                    <span role="img" aria-label="Man Technologist">👨‍💻</span>
                                </motion.div>
                            </Link>
                            <Link to="/skills"> 
                                <motion.div variants={movement3} animate="animate" transition={movement3.transition} className="item3 navButton emoji">
                                    <span role="img" aria-label="Man Mechanic">👨‍🔧</span>
                                </motion.div>
                            </Link>
                            <Link to="/hobbies"> 
                                <motion.div variants={movement4} animate="animate" transition={movement4.transition} className="item4 navButton emoji"> 
                                <span role="img" aria-label="Man Running">🏃‍♂️</span>
                            </motion.div>
                            </Link>        
                        </motion.div>
                        <div className="flexRow width90">
                            <Link to="/quiz">
                                <ButtonMain>{sentence1.toUpperCase()}
                                    <span role="img" aria-label="Thinking Face">🤔</span>
                                </ButtonMain>
                            </Link>
                            <Link to="/game">
                                <ButtonSecondary>{sentence2.toUpperCase()}
                                    <span role="img" aria-label=" Hushed Face">😯</span>
                                </ButtonSecondary>
                            </Link>
                            <motion.button 
                                variants={itemUp} 
                                transition={itemUp.transition}
                                className="picChangeButton"
                                whileHover={{scale:1.3}}
                                whileTap={{scale:0.5}}
                                onClick={handleChangePic}
                            >
                                    <motion.span whileTap={{scale: 0.7}} role="img" aria-label=" Hushed Face">😜</motion.span>
                            </motion.button>
                            </div>
                        </div>
                        <motion.img src={imagesForHome[picture].photo} variants={opacityChange} transition={opacityChange.transition} className='picture' alt="me" />
                    </motion.section>        
                </AnimatedPage>
            </div>
        );
}
export default Home;

