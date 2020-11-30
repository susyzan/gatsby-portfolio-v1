import React from "react"
import {Link} from "gatsby"
import styles from "./contact.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const Contact = ({children}) => {
    return (
        <div className={styles.social_wrapper}>
            <Link className={styles.social}
                  to="https://www.linkedin.com/in/susannazanatta/"
                  target="_blank"
                  aria-label="Visit my LinkedIn profile, opens in a new tab"
            >
                <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" aria-hidden="true"/>
            </Link>
            <Link className={styles.social}
                  to="mailto:susanna.zanatta@gmail.com"
                  target="_blank"
                  aria-label="Email me, opens email client"
            >
                <FontAwesomeIcon icon={faPaperPlane} title="LinkedIn" aria-hidden="true"/>
            </Link>
        </div>
    )
}

export default Contact;