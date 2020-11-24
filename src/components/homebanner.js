import React from "react"

import styles from "./homebanner.module.css"

const HomeBanner = () => {
    return (
        <div className={styles.home_banner}>
            <div className={styles.content}>
                <h1>Susanna Zanatta</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>

                {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
                {/*    <Image />*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default HomeBanner