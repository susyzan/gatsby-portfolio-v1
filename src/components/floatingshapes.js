import React from "react"
import styles from "./floatingshapes.module.css"

const FloatingShapes = () => {
    return (
        <div className={styles.circles} role="presentation" aria-hidden={true}>
            <span>0</span>
            <span>1</span>
            <span>1</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>1</span>
            <span>1</span>
            <span>0</span>
            <span>1</span>
        </div>
    )
}

export default FloatingShapes