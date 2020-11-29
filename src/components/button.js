import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {Link} from "gatsby"

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
            <Link
            to={to}
            className={`${classes} ${styles.button} ${floating ? styles.floating : ''}`}
            target="_blank"
            ariaLabel={ariaLabel}
            >
                {children}
            </Link>
        )
    }

}

export default Button