import React, {useState, useEffect} from "react";
import '../../css/Quiz.css';
import {
    Link
} from "react-router-dom";
import quizJson from '../../json/quiz.json';
import { v4 as uuidv4 } from 'uuid';
import {motion, AnimatePresence, useMotionValue, useTransform} from "framer-motion";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";




export default function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [showGreetings, setShowGreetings] = useState(true);

    const [score, setScore] = useState(0);

    const [answered, setAnswered] = useState(false);

    const [comment, setComment] = useState('hi');

    const [disableFalse, setDisableFalse] = useState(false);

    const [disableTrue, setDisableTrue] = useState(true);

    const [isShown, setIsShown] = useState(false);

    function Card(props) {
        const nextQuestion = currentQuestion + 1;
        const x = useMotionValue(0)
        const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5])
        const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
            clamp: false,
        })
    
        function handleDragEnd(event, info) {
            if (info.offset.x < -100) {
                props.setExitX(-250)
                props.setIndex(props.index + 1)
                handleNextQuestionsButtonClick()
            }
            if (info.offset.x > 100) {
                props.setExitX(250)
                props.setIndex(props.index + 1)
                handleNextQuestionsButtonClick()
            }
        }
    
        return (
            <motion.div
                style={{
                    width: "80%",
                    height: 150,
                    position: 'absolute',
                    top: 0,
                    x: x,
                    rotate: rotate,
                    cursor: "grab",
                }}
                whileTap={{ cursor: "grabbing" }}
                drag={props.drag}
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                onDragEnd={ answered ? handleDragEnd : null}
                initial={props.initial}
                animate={props.animate}
                transition={props.transition}
                exit={{
                    x: props.exitX,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                }}
            >
                <motion.div
                    
                    className="second"
                    style={{
                        width: "100%",
                        height: 150,
                        borderRadius: 30,
                        scale: scale,
                    }}
                >
                    {props.index+1 ? 
                    <h1 className="question">{quizJson[currentQuestion].question}</h1>
                    : nextQuestion > quizJson.length-1 ?
                    <h1 className="question">Это Последний Вопрос 😢</h1>
                    :
                    <h1 className="question">{quizJson[currentQuestion+1].question}</h1>}
                </motion.div>
            </motion.div>
        )
    }
    
    function CC_32_Animate_Presence_Stack_3D(props) {
        const [index, setIndex] = useState(0)
        const [exitX, setExitX] = useState("100%")
    
        return (
            <div className="first">
                <motion.div
                    className="first"
                >
                    <AnimatePresence initial={false}>
                        <Card
                            key={index + 1}
                            initial={{ scale: 0, y: 105, opacity: 0 }}
                            animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
                            transition={{
                                scale: { duration: 0.2 },
                                opacity: { duration: 0.4 },
                                
                            }}
                        />
                        <Card
                            key={index}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                opacity: { duration: 0.2 },
                            }}
                            exitX={exitX}
                            setExitX={setExitX}
                            index={index}
                            setIndex={setIndex}
                            drag="x"
                        />
                    </AnimatePresence>
                </motion.div>
            </div>
        )
    }

    const Delayed = ({ children, waitBeforeShow = 1200 }) => {

        useEffect(() => {
            console.log(waitBeforeShow);
            setTimeout(() => {
                setIsShown(true);
            }, waitBeforeShow);
        }, [waitBeforeShow]);
        
        return isShown ? children : null;
        };
        

    const handleNextQuestionsButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        setAnswered(false);
        setDisableFalse(false);
        setDisableTrue(true);
        setIsShown(false);
        if (nextQuestion < quizJson.length){
            setCurrentQuestion(nextQuestion); 
        } else {
            setShowScore(true);
        }       
    };

    const handleAnswer = (isCorrect, id, uuid) => {
        setDisableFalse(true);
        setDisableTrue(false);
        setAnswered(true);
        if (id === 101){
            setComment (quizJson[currentQuestion].answers[0].comment);  
        } else if (id === 102){
            setComment (quizJson[currentQuestion].answers[1].comment);
        } else if ( id === 103){
            setComment (quizJson[currentQuestion].answers[2].comment);
        } else if (id === 104){
            setComment (quizJson[currentQuestion].answers[3].comment);
        }
        if(isCorrect){
            setScore(score+1);
        }
    }

    const handleShowQuestions = () => {
        setShowGreetings(false);
        setIsShown(false);
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
            initial: {opacity: 0, x: -200},
            animate: {opacity: 1, rotate: 360, x: 0 },
            transition: { type: "spring", duration: 5, bounce: 0.6 }
        }
        return(
            <motion.div variants={list} initial="hidden" animate="visible" className="wrapFinal">
                <motion.h1 variants={itemLeft}>Привет!</motion.h1>
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
                <motion.p variants={itemLeft}  > Это викторина на 20 вопросов 
                <br />Попробуй ответить правильно на всё</motion.p>
                <motion.p variants={itemRight} >Удачи <span role="img" aria-label="Left Arrow">😌</span></motion.p>              
                <motion.button
                variants={itemPop} 
                whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}} 
                className="mainButton height50" 
                onClick={handleShowQuestions}
                key={uuidv4()}
                > Погнали 
                </motion.button>
            </motion.div>
        )
    }
    
    const ThankYouPage = () => {
        
        const emojiAni = {
            initial: {opacity: 0, x: -200},
            animate: {opacity: 1, rotate: 360, x: 0 },
            transition: { type: "spring", duration: 5, bounce: 0.6 }
        }

        const StartOver = () => {
            setShowGreetings(true);
            setShowScore(false);
            setCurrentQuestion(0);
        }

        return (
            <div className="wrapFinal">
                <h2>Спасибо, что прошел! 
                <br /> Ты крут!</h2>
                <motion.span variants={emojiAni} className="emoji" role="img" aria-label="Left Arrow">👏</motion.span>
                { score > 10 &&
                    <p>Ты ответил правильно на {score} из {quizJson.length} вопросов.
                    <br />Я горжусь тобой <span role="img" aria-label="Left Arrow">😌</span></p>
                }
                { score <= 10 &&
                    <p>Ты ответил правильно на {score} из {quizJson.length} вопросов.
                    <br />
                    <br />Почему ты так мало обо мне знаешь? 
                    <br />Может попробудешь еще раз?
                    <span role="img" aria-label="Left Arrow">😡</span></p>
                }    
                <div className="endButtons">
                <Link to="/"><button className="mainButton"> На Главную</button></Link>
                <button className="secondaryButton" onClick={StartOver}> Пройти Заново</button>
                </div>
            </div>
        )
    }

    const QuestionBlock = () => {
        return(              
            <CC_32_Animate_Presence_Stack_3D />
        )
    }

    const Answers = () => {
        return (
            <div className="cartAnswers">
                {quizJson[currentQuestion].answers.map((answers) => 
                <motion.button
                whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}}
                disabled= {disableFalse}
                className={`answerVariant ${answered ? answers.isCorrect ? "correct":"incorrect" : null}`}
                key={uuidv4()} 
                onClick={() => handleAnswer(answers.isCorrect, answers.id, uuidv4())}>
                    {answers.answerText}
                </motion.button>)}
            </div>
        )
    }

    const AnswerComment = () => {
        const itemPop = {
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
            transition: {duration: 1.2, type: "spring", bounce: 0.5}            
        }
        return(
            <motion.p 
                variants={itemPop} 
                initial={itemPop.hidden} 
                animate={itemPop.visible} 
                transition={itemPop.transition}
                className="afterAnswerComment"
            >{comment}</motion.p>
        )
    }

    const Hint = () => {
        const itemPop = {
            visible: { opacity: 1  },
            hidden: { opacity: 0 },
            transition: {duration: 1},         
        }
        return(
            <motion.div
                className="hint"
                variants={itemPop} 
                initial={itemPop.hidden} 
                animate={itemPop.visible} 
                transition={itemPop.transition}
            >
            {quizJson[currentQuestion].id <5 ? <p>👆&nbsp; Перетащи вопрос &nbsp; 👆 
                <br /> 👈 &nbsp; Влево или Вправо &nbsp; 👉 
                <br />Чтобы перейти к следующему вопросу, но сначала ответь 😊</p> : null }
            </motion.div>
        )
    }

    // const NextQuestionButton = () => {
    //     return(
    //         <div className="bottomButtons">
    //             <Link to="/"><span className="emoji" role="img" aria-label="Left Arrow">⬅️</span></Link>
    //             <motion.button 
    //             whileHover={{scale: 1.1}} whileTap = {{scale: 0.9}}
    //             key={uuidv4()}
    //             disabled={disableTrue}
    //             onClick={() => handleNextQuestionsButtonClick()}
    //             className="nextQuestion"
    //             >
    //                 <span 
    //                 className="emoji" 
    //                 role="img" 
    //                 aria-label="Right Arrow" 
    //                 >➡️</span>
    //             </motion.button>
    //         </div>
    //     )
    // }
    console.log(quizJson.length);
    return(
        <div className='wrapper'>  
            <AnimatePresence>
            {answered || isShown ? (null) : (
            <motion.div 
                key={uuidv4()} 
                className="forAni" 
                initial = {{opacity:1, x: '-100vw'}} 
                animate = {{opacity:1, x: '100vw'}} 
                transition = {{duration: 1}} 
            />       
            )}
                <Delayed>            
                    {showGreetings ? (<Greetings />): ( 
                    <>         
                        {showScore ? (<ThankYouPage />):(
                        <>
                            <h2>Вопрос {quizJson[currentQuestion].id} из {quizJson.length}</h2>
                            <p>Ты ответил правильно на {score} вопросов</p>
                            <div className="bar">
                            <ProgressBar
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                                percent={quizJson[currentQuestion].id*5}
                            />
                            </div>
                            <QuestionBlock />
                            <Hint />
                            <Answers />
                            {answered ? (<AnswerComment />) : (null)}
                        </> 
                        )}
                    </>
                    )}  
                </Delayed>    
            </AnimatePresence>    
        </div>
    );
}

