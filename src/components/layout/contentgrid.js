import React from "react"

import styles from "./contentgrid.module.css"

const ContentGrid = ({children, noGap, noMargin}) => {
    return (
        <div className={`${styles.content_grid} ${noGap ? styles.no_gap : ''} ${noMargin ? styles.no_margin : ''}`}>
            {children}
        </div>
    )
}

export default ContentGrid