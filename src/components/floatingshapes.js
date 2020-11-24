import React from "react"
import styles from "./floatingshapes.module.css"

const FloatingShapes = () => {
    return (
        <ul className={styles.circles} aria-hidden={true}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default FloatingShapes