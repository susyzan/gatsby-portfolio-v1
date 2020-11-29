import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import RouteAnnouncerHack from "../components/routeAnnouncerHack";
import SEO from "../components/seo";
import Banner from "../components/banner";
import Fade from "react-reveal/Fade";
import FloatingShapes from "../components/floatingshapes";
import Section from "../components/section";
import styles from "./project.module.css"
import ContentGrid from "../components/layout/contentgrid";
import ContentGridItem from "../components/layout/contentgriditem";
import Bounce from "react-reveal/Bounce";
import Button from "../components/button";
import BannerHeading from "../components/bannerheading";

export default ({ data }) => {
    const project = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html
    const pageTitle = `${project.title} - Susanna Zanatta`;
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle}/>
            <article>
                <Section id="banner" bg="bg_transparent">
                    <Banner>
                        <Fade duration={2000} left={true} distance="1.6rem">
                            <BannerHeading>{`${project.title}.`}</BannerHeading>
                        </Fade>
                        <div>
                            <div style={{position: 'relative'}}>
                                <FloatingShapes />
                            </div>
                        </div>
                    </Banner>
                </Section>
                <Section bg="bg_transparent">
                    <ContentGrid>
                        <ContentGridItem two={true}>
                            <ContentGrid noGap={true}>
                                <ContentGridItem full={true}>
                                    <Fade duration={2000} bottom={true} distance="1.6rem">
                                        <p className={`h4 ${styles.intro_copy}`}>
                                            {project.intro}
                                            {project.employer && (
                                                    <span className={styles.employer}>@ {project.employer}</span>
                                            )}
                                        </p>
                                        <div className={styles.tag_list_container}>
                                            <ul aria-label="technology used" className={styles.tag_list}>
                                                {project.tech.map((tag, i) => (
                                                    <li key={i} className={styles.tag_list_item}>{tag}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button
                                            to={project.url}
                                            floating={true}
                                            external={true}
                                            ariaLabel={`Go to ${project.title} - opens an external website in a new tab`}
                                        >Take me there</Button>
                                    </Fade>
                                </ContentGridItem>
                                <ContentGridItem full={true}>
                                    <Fade duration={2000} left={true} distance="1.6rem">
                                        <figure className={styles.desktop_img_container}>
                                            <Img fluid={project.desktop.childImageSharp.fluid} alt="Desktop screenshot"/>
                                        </figure>
                                    </Fade>
                                </ContentGridItem>
                            </ContentGrid>
                        </ContentGridItem>
                        <ContentGridItem  classes="center">
                            <Fade duration={2000} right={true} distance="1.6rem">
                                <figure className={styles.mobile_img_container}>
                                    <Img fluid={project.mobile.childImageSharp.fluid} alt="Mobile screenshot"/>
                                </figure>
                            </Fade>
                        </ContentGridItem>
                    </ContentGrid>
                    <ContentGrid>
                        <ContentGridItem full={true}>
                            <Fade duration={500} bottom={true} distance="1rem">
                                <div dangerouslySetInnerHTML={{ __html: html}}  style={{
                                    paddingTop: `3rem`
                                }}/>
                            </Fade>
                        </ContentGridItem>
                        <ContentGridItem full={true}>
                                {project.imgArray.map((image, i) => (
                                    <figure key={`image-${i}`}>
                                        <Img fluid={image.img.childImageSharp.fluid} alt={image.alt}/>
                                    </figure>
                                ))}
                        </ContentGridItem>
                        <ContentGridItem>
                            <Bounce delay={800} duration={800} bottom={true}>
                                <Button
                                    to="/work"
                                    floating={true}
                                >Go back</Button>
                            </Bounce>
                        </ContentGridItem>
                    </ContentGrid>
                </Section>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                client
                employer
                subject
                tech
                imgArray {
                    img {
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    alt
                }
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }  
                }
                desktop {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                mobile {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                intro
                url
            }
        }
    }
`
