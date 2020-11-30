import React from "react"
import {Link} from "gatsby";
import styles from "./footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <Link
            to="https://www.linkedin.com/in/susannazanatta/"
            target="_blank"
            aria-label="Visit my LinkedIn profile, opens in a new tab"
            className={styles.social}
        >
            <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" aria-hidden="true"/>
        </Link>
    )
}