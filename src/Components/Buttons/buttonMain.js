import { motion } from "framer-motion";

const itemUp = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
    transition: { duration: 1 }        
}

const ButtonMain = ({children}) => {
    return(
        <motion.button 
            variants={itemUp} 
            transition={itemUp.transition} 
            className="mainButton" 
            whileHover={{scale: 1.1}} 
            whileTap = {{scale: 0.9}}
        > 
            {children} 
        </motion.button>
    )
}

export default ButtonMain; 