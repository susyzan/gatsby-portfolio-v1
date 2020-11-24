import React from "react"

import styles from "./skiplinks.module.css"

const SkipLinks = () => {
    return (
        <nav id="skip-links" aria-label="Skip links menu" className={styles.skipLinks}>
            <ul>
                <li><a href="#content">Skip to content</a></li>
                <li><a href="#navigation">Skip to navigation</a></li>
                <li><a href="#footer">Skip to footer</a></li>
            </ul>
        </nav>
    )
}

export default SkipLinks