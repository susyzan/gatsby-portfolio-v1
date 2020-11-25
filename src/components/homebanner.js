import React from "react"

import styles from "./homebanner.module.css"
import Button from "./button";

const HomeBanner = () => {
    return (
        <div className={styles.home_banner}>
            <div className={styles.content}>
                <h1><span>Hello,</span><span>you found me...</span><span>I'm Susie.</span></h1>
                <p>I'm a <span>digital</span> <span>developer</span> based in the UK.</p>
                <Button
                    to="/work"
                    animation="fade"
                    floating={true}
                >about me</Button>
            </div>
        </div>
    )

}

export default HomeBanner