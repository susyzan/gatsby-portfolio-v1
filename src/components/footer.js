import React from "react"
import styles from "./footer.module.css"
import Contact from "./contact";

const Footer = ({menuLinks}) => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="content-container-xl">
                <div className={styles.copy}>
                    <span>
                        ©{new Date().getFullYear()} Susanna Zanatta
                    </span>
                    <Contact/>
                </div>
            </div>
        </footer>
    )
}

export default Footer