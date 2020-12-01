import React from "react"
import Fade from 'react-reveal/Fade'
import { graphql } from "gatsby"
import RouteAnnouncerHack from "../components/routeAnnouncerHack"

import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/reset.css"

import Banner from "../components/banner"
import BannerHeading from "../components/bannerheading"
import FloatingShapes from "../components/floatingshapes"
import Layout from "../components/layout"
import ProjectCard from "../components/project-compponents/project-card"
import Section from "../components/section"
import SEO from "../components/seo"


import styles from "./work.module.css"

const Work = ({data}) => {
    const pageTitle = "Work - Susanna Zanatta";
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle}/>
            <Section id="banner" bg="bg_transparent">
                <Banner>
                    <Fade duration={2000} left={true} distance="1.6rem">
                        <BannerHeading large={true}>Work.</BannerHeading>
                    </Fade>
                    <div>
                        <div style={{position: 'relative'}}>
                            <FloatingShapes />
                        </div>
                    </div>
                </Banner>
            </Section>
            <Section bg="bg_transparent">
                <ul className={styles.project_list}>
                    {data.projects.edges.map((project, i) => (
                        <li key={i} className={styles.project_item}>
                            <Fade duration={2000} bottom={true} distance="1.6rem">
                                <ProjectCard project={project.node}/>
                            </Fade>
                        </li>
                    ))}
                </ul>
                <div style={{position: 'relative'}}>
                    <FloatingShapes />
                </div>
            </Section>
        </Layout>
    )
}


export default Work

export const query = graphql`  
    {
        firstImage: file(
            relativePath: { eq: "mixed-tape.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        projects: allMarkdownRemark(sort: {fields: frontmatter___sort, order: DESC}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        client
                        title
                        subtitle
                    }
                }
            }
        }
    }
`