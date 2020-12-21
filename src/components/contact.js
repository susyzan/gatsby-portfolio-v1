import React from "react"
import styles from "./contact.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <div className={styles.social_wrapper}>
            <a className={styles.social}
                href="https://www.linkedin.com/in/susannazanatta/"
                target="_blank"
               rel="noreferrer"
                aria-label="Visit my LinkedIn profile, opens in a new tab"
            >
                <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" aria-hidden="true"/>
            </a>
            <a className={styles.social}
                href="mailto:susanna.zanatta@gmail.com"
                aria-label="Email me, opens email client"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faPaperPlane} title="Email" aria-hidden="true"/>
            </a>
        </div>
    )
}

export default Contact;