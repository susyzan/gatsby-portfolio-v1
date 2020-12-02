import React from "react"

import styles from "./bannerheading.module.css"

const BannerHeading = ({children, large}) => {
    return (
        <h1 className={`${styles.heading} ${large ? styles.large : ''}`}>{children}</h1>
        )
}

export default BannerHeading