import React from "react"
import styles from "./footer.module.css"

const Footer = ({menuLinks}) => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="content-container">
                <div className={styles.copy}>
                    ©{new Date().getFullYear()} Susanna Zanatta
                </div>
            </div>
        </footer>
    )
}

export default Footer