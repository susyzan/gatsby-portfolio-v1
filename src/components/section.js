import React from "react"
import styles from "./section.module.css"

const Section = ({children, id, bg}) => {
    return (
        <section id={id} className={`${styles[bg]} ${styles.section}`}>
            <div className="content-container">
                {children}
            </div>
        </section>
    )
}

export default Section