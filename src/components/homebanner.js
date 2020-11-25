import React from "react"
import FloatingShapes from "./floatingshapes";

import styles from "./homebanner.module.css"

const HomeBanner = () => {
    return (
        <div className={styles.home_banner}>
            <div className={styles.content}>
                <h1><span>Hey there!</span><span>You found me.</span><span>I'm Susie.</span></h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
            </div>
            <FloatingShapes/>
        </div>
    )
}

export default HomeBanner