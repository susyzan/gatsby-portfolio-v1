import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./button.module.css"

const Button = ({to, classes, floating, children}) => {
    return (
        <AniLink to={to}
                 className={`${classes} ${styles.button} ${floating ? styles.floating : ''}`}
                 fade
                 duration={0.5}
        >
            {children}
        </AniLink>
    )
}

export default Button