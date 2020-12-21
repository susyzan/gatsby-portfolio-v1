import React from "react"
import styles from "./floatingshapes.module.css"

const FloatingShapes = () => {
    return (
        <div className={styles.circles} role="presentation" aria-hidden={true}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default FloatingShapes