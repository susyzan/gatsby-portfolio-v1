import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

import MainNav from "./mainnav"
import style from "./header.module.css"

const Header = ({ siteTitle, headerTitleSm, headerTitle, headerDescription,  menuLinks }) => (
    <header id="site-header" className={style.masthead} role="banner">
        <div className={`content-container-xl ${style.masthead_container}`}>
            <div className={style.masthead_info}>
                <AniLink
                    paintDrip
                    to="/"
                    duration={0.8}
                    className={""}
                    hex="#ff858d"
                >
                    <h1>
                        <span className={style.site_title_sm} aria-label={siteTitle} aria-hidden={true}>{headerTitleSm}</span>
                        <span className="sr-only">{`${headerTitle} ${headerDescription}`}</span>
                    </h1>
                </AniLink>
            </div>
            <MainNav menuLinks={menuLinks}/>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
    headerTitleSm: PropTypes.string,
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
    headerTitleSm: ``,
    headerTitle: ``,
    headerDescription: ``,
}

export default Header
