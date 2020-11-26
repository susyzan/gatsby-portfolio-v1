import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import styles from "./footer.module.css"
import FooterNav from "./footernav"

const Footer = ({menuLinks}) => {
    return (
        <footer id="footer" className={styles.footer}>
            <FooterNav menuLinks={menuLinks}/>
            <div className={styles.copy}>
                © {new Date().getFullYear()}, made with <FontAwesomeIcon icon={faHeart} title="love"/> by Susie
            </div>
        </footer>
    )
}

export default Footer