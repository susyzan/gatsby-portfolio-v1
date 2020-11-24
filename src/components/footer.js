import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <nav aria-label="Footer menu">
                <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
            </nav>
            <div>
                © {new Date().getFullYear()}, Built with
                {` `}
            </div>
        </footer>
    )
}

export default Footer