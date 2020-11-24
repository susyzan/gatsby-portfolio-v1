import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import MainNav from "./mainnav"
import style from "./header.module.css"

const Header = ({ siteTitle, headerTitleSm, headerTitle, headerDescription,  menuLinks }) => (
    <header id="site-header" className={style.masthead} role="banner">
        <div className={style.masthead_container}>
            <div className={style.masthead_info}>
                <Link to="/">
                    <div className={style.site_title_sm} aria-label={siteTitle}>{headerTitleSm}</div>
                    <div className={style.site_title}>{headerTitle}</div>
                    <div className={style.site_description}>{headerDescription}</div>
                </Link>
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
