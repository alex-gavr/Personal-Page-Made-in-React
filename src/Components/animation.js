import { motion } from "framer-motion";

const animation = {
    initial: { opacity: 0, x: -100},
    animate: { opacity: 1, x: 0 },
    exit: { 
        opacity: 0, 
        x: 100, 
        filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)'
        ] 
    },
    transition: { duration: 0.5 }
}



const AnimatedPage = ({children}) => {
    return(
        <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition={animation.transition}>
            {children}
        </motion.div>
    )
}

export {AnimatedPage};