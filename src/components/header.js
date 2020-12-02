import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

import Logo from "./logo"
import MainNav from "./mainnav"
import style from "./header.module.css"

const Header = ({ headerTitle, pageTitle,  menuLinks }) => (

    <header id="site-header" className={style.masthead} role="banner">
        <div className={`content-container-xl ${style.masthead_container}`}>
            <div className={style.masthead_info}>
                <AniLink
                    paintDrip
                    to="/"
                    duration={0.8}
                    className={""}
                    hex="#ff784f"
                >
                    <h1>
                        <Logo />
                        <span className="sr-only">{` ${headerTitle} - ${pageTitle}`}</span>
                    </h1>
                </AniLink>
            </div>
            <MainNav menuLinks={menuLinks}/>
        </div>
    </header>
)

Header.propTypes = {
    headerTitleSm: PropTypes.string,
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string,
    pageTitle: PropTypes.string,
}

Header.defaultProps = {
    headerTitleSm: ``,
    headerTitle: ``,
    headerDescription: ``,
    pageTitle: 'Susanna Zanatta - Digital developers'
}

export default Header
