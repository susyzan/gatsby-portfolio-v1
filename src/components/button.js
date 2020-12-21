import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./button.module.css"

const Button = ({to, classes, floating, children, external, ariaLabel}) => {
    if(!external) {
        return (
            <AniLink to={to}
                     className={`${classes} ${styles.button} ${floating ? styles.floating : ''}`}
                     fade
                     duration={0.5}
            >
                {children}
            </AniLink>
        )
    } else {
        return (
            <a
            href={to}
            className={`${classes} ${styles.button} ${floating ? styles.floating : ''}`}
            target="_blank"
            rel="noreferrer"
            aria-label={ariaLabel}
            >
                {children}
            </a>
        )
    }

}

export default Button