import React from "react"
import { graphql } from "gatsby"
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Img from "gatsby-image"
import RouteAnnouncerHack from "../components/routeAnnouncerHack";

import Banner from "../components/banner";
import BannerHeading from "../components/bannerheading";
import Button from "../components/button";
import ContentGrid from "../components/layout/contentgrid";
import ContentGridItem from "../components/layout/contentgriditem";
import FloatingShapes from "../components/floatingshapes";
import Layout from "../components/layout"
import Section from "../components/section";
import SEO from "../components/seo";

import styles from "./project.module.css"


export default ({ data }) => {
    const project = data.markdownRemark.frontmatter
    const html = data.markdownRemark.html
    const pageTitle = `${project.title}`;
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title="Work"/>
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
                                            {project.client && (
                                            <span className={styles.client}>{` for ${project.client}`}</span>
                                            )}
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
                                        <figure className={styles.img_one_container}>
                                            <Img fluid={project.imgOne.childImageSharp.fluid} alt={project.imgOneAlt}/>
                                        </figure>
                                    </Fade>
                                </ContentGridItem>
                            </ContentGrid>
                        </ContentGridItem>
                        <ContentGridItem  classes="center">
                            <Fade duration={2000} right={true} distance="1.6rem">
                                <figure className={styles.img_two_container}>
                                    <Img fluid={project.imgTwo.childImageSharp.fluid} alt={project.imgTwoAlt}/>
                                </figure>
                            </Fade>
                        </ContentGridItem>
                    </ContentGrid>
                    <div className={styles.project_description}>
                        <ContentGrid>
                            {html && (
                                <ContentGridItem>
                                    <Fade duration={500} bottom={true} distance="1rem">
                                        <div dangerouslySetInnerHTML={{ __html: html}}  style={{
                                            paddingTop: `3rem`
                                        }}/>
                                    </Fade>
                                </ContentGridItem>
                            )}
                            {project.imgArray.map((image, i) => (
                                <ContentGridItem key={`image-${i}`} two={(i === 0 && true)}>
                                    <figure className={styles.project_description_image_container}>
                                        <Img fluid={image.img.childImageSharp.fluid} alt={image.alt} className={styles.project_description_image}/>
                                    </figure>
                                </ContentGridItem>
                            ))}
                        </ContentGrid>
                    </div>
                    <Bounce duration={800} bottom={true}>
                        <Button
                            to="/work"
                            floating={true}
                        >Go back</Button>
                    </Bounce>
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
                imgOne {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imgOneAlt
                imgTwo {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imgTwoAlt
                intro
                url
            }
        }
    }
`
