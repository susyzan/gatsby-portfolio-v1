import React from "react"
import styles from "./footer.module.css"
import FooterNav from "./footernav"

const Footer = ({menuLinks}) => {
    return (
        <footer id="footer" className={styles.footer}>
            <FooterNav menuLinks={menuLinks}/>
            <div>
                © {new Date().getFullYear()}, Built with
                {` `}
            </div>
        </footer>
    )
}

export default Footer