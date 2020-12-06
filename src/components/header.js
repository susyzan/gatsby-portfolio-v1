import React, {useState} from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

import Logo from "./logo"
import MainNav from "./mainnav"
import style from "./header.module.css"


const Header = ({ headerTitle, pageTitle,  menuLinks }) => {

    const colors = ["#eec0c6", "#79aea3", "#ff784f", "#ffe381" ]
    const [color,setColor]= useState(colors[Math.floor(Math.random() * colors.length)])
    const changeColor = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }

    return (
        <header id="site-header" className={style.masthead} role="banner">
            <div className={`content-container-xl ${style.masthead_container}`}>
                <div className={style.masthead_info}>
                    <AniLink
                        paintDrip
                        to="/"
                        duration={0.8}
                        hex={color}
                        onClick={changeColor}
                        onKeyPress={changeColor}
                    >
                        <div className={style.h1} role="heading" aria-level="1">
                            <Logo/>
                            <span className="sr-only">{` ${headerTitle} - ${pageTitle}`}</span>
                        </div>
                    </AniLink>
                </div>
                <MainNav menuLinks={menuLinks}/>
            </div>
        </header>
    )


}

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
