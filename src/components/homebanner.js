import React from "react"
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

import styles from "./homebanner.module.css"
import Button from "./button";

const HomeBanner = () => {
    return (
        <div className={styles.home_banner}>
            <div className={styles.content}>
                <Fade duration={2000} left={true} distance="1rem">
                    <h2><span>Hello.</span> <span>I'm Susie.</span></h2>
                    <p><span>I'm a digital</span> <span>developer.</span></p>
                </Fade>
                <Bounce delay={900} duration={1000} bottom={true}>
                    <Button
                        to="/about"
                        animcolor="#774c60"
                        floating={true}
                    >tell me more</Button>
                </Bounce>
            </div>
        </div>
    )

}

export default HomeBanner