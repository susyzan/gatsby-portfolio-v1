import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GatsbyImage from "gatsby-image"

import styles from "./project-card.module.css"

const ProjectCard = ({project}) => {
    const fields = project.frontmatter
    return (
        <div className={styles.project_card}>
            <AniLink
                fade
                to="/about"
                duration={0.5}
                className={`${styles.link} anim`}
            >
                <div className={styles.project_card_content}>
                    <span className={`p ${styles.project_subheading}`}>{fields.subtitle}</span>
                    <span className={`h3 ${styles.project_name}`}>{fields.title}</span>
                    <span className={`p ${styles.project_client}`}>for {fields.client}</span>
                </div>
            </AniLink>
        </div>
    )
}

export default ProjectCard