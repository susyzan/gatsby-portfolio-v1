import React from "react"

import styles from "./contentgrid.module.css"

const ContentGrid = ({children, noGap}) => {
    return (
        <div className={`${styles.content_grid} ${noGap ? styles.no_gap : ''}`}>
            {children}
        </div>
    )
}

export default ContentGrid