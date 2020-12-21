import React from "react"

import styles from "./banner.module.css"

const Banner = ({children}) => {
    return (
        <div id="content" className={styles.banner}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )

}

export default Banner