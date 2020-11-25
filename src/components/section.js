import React from "react"
import styles from "./section.module.css"

const Section = ({children, id, bg, style}) => {
    return (
        <section id={id} className={`${styles[bg]} ${styles.section}`} style={style}>
            <div className="content-container">
                {children}
            </div>
        </section>
    )
}

export default Section