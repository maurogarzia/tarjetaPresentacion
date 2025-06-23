import { useState } from "react"
import { Card } from "../components/Card/Card"
import styles from './Screen.module.css'
import { CardReverse } from "../components/CardReverse/CardReverse"
import { motion, AnimatePresence } from "framer-motion"

export const Screen = () => {

    const [viewCard, setViewCArd] = useState<boolean>(true)

    // Funcion para cambiar el estado de view de la tarjeta
    const handleFlipCard = () => {
        setViewCArd(!viewCard)
    }

    return (
        <div onClick={handleFlipCard} className={styles.containerPrincipal}>
            <button className={styles.flipCard}>Voltear</button>
            <AnimatePresence mode="wait">
                {viewCard ? (
                    <motion.div
                        key="front"
                        initial={{opacity:1 , rotateY: 90}}
                        animate={{opacity: 1, rotateY : 0}}
                        exit={{opacity:1, rotateY: -90}}
                        transition={{duration : 0.2}}
                        style={{perspective : '2000px'}}
                    >
                        <Card/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="reverse"
                        initial={{opacity:1 , rotateY: 90}}
                        animate={{opacity: 1, rotateY : 0}}
                        exit={{opacity:1, rotateY: -90}}
                        transition={{duration : 0.2}}
                        style={{perspective : '2000px'}}
                    >
                            <CardReverse/>
                        </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    )
}