import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./footernav.module.css"

const FooterNav = ({ menuLinks }) => {
    return (
        <nav id="navigation" className={styles.footer_nav} aria-label="Footer menu">
            <ul>
                {menuLinks.map(props => (
                    <li key={props.name}>
                        <AniLink
                            fade
                            to={props.link}
                            duration={0.3}
                        >
                            {props.name}
                        </AniLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FooterNav
