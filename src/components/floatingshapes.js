import React from "react"
import styles from "./floatingshapes.module.css"

const FloatingShapes = () => {
    return (
        <ul className={styles.circles} aria-hidden={true}>
            <li>0</li>
            <li>1</li>
            <li>1</li>
            <li>0</li>
            <li>0</li>
            <li>0</li>
            <li>1</li>
            <li>1</li>
            <li>0</li>
            <li>1</li>
        </ul>
    )
}

export default FloatingShapes