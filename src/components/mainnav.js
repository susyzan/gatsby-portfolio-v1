import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import style from "./mainnav.module.css"

const MainNav = ({ menuLinks }) => {
    return (
        <nav id="navigation" className={style.navigation} aria-label="Main menu">
            <ul>
                {menuLinks.map(props => (
                    <li key={props.name}>
                        <AniLink
                            fade
                            to={props.link}
                            duration={1}
                            className="anim"
                            activeClassName="active"
                        >
                            {props.name}
                        </AniLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNav
