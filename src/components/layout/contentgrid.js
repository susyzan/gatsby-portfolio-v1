import React from "react"

import styles from "./contentgrid.module.css"

const ContentGrid = ({children}) => {
    return (
        <div className={styles.content_grid}>
            {children}
        </div>
    )
}

export default ContentGrid