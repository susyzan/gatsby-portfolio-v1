import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import styles from "./footer.module.css"
import FloatingShapes from "./floatingshapes";

const Footer = ({menuLinks}) => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="content-container">
                <div className={styles.copy}>
                    © {new Date().getFullYear()}, made with <FontAwesomeIcon icon={faHeart} title="love"/> by Susie
                </div>
            </div>
        </footer>
    )
}

export default Footer