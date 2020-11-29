import React from "react"

import styles from "./bannerheading.module.css"

const BannerHeading = ({children, large}) => {
    return (
        <h2 className={`${styles.heading} ${large ? styles.large : ''}`}>{children}</h2>
        )
}

export default BannerHeading