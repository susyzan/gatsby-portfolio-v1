import React from "react"
import { graphql } from 'gatsby'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCss3, faHtml5, faJs, faVuejs, faReact, faPhp, faWordpress, faLaravel} from "@fortawesome/free-brands-svg-icons"

import RouteAnnouncerHack from "../components/routeAnnouncerHack"

import "./about.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/reset.css"

import Banner from "../components/banner"
import BannerHeading from "../components/bannerheading"
import Button from "../components/button"
import ContentGrid from "../components/layout/contentgrid"
import ContentGridItem from "../components/layout/contentgriditem"
import FloatingShapes from "../components/floatingshapes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const About = ({data}) => {
    const pageTitle = "About - Susanna Zanatta"
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle}/>
            <Section id="banner" bg="bg_transparent">
                <Banner>
                    <Fade duration={2000} left={true} distance="1.6rem">
                        <BannerHeading large={true}>About.</BannerHeading>
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
                    <ContentGridItem two={true} classes="about_text_block">
                        <Fade duration={2000} bottom={true} distance="1.6rem">
                            <h3>Background.</h3>
                            <p>I discovered my love for digital in sunny Australia where l lived for almost a decade.
                                Over there, I had the chance to team up with brilliant professionals in tech and advertising and create websites, landing pages, web apps, and EDM campaigns for clients like <strong>Queensland Government</strong>, <strong>Sanofi</strong>, <strong>Suncorp</strong> and <strong>Urban Utilities</strong> to name a few.
                            </p>
                            <p>Whilst making web pages look sexy is what I enjoy the most, I love writing good semantic markup and working with CSS, Sass, Js, Vue, React and PHP. However, I am always happy to dive into something I have never done before.</p>

                            <div className="tech">
                                <span>
                                    <FontAwesomeIcon icon={faHtml5} aria-label="HTML5" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCss3} aria-label="CSS3" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faJs} aria-label="JavaSCript" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faVuejs} aria-label="Vue Js" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faReact} aria-label="React" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faPhp} aria-label="PHP" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faWordpress} aria-label="WordPress" className="tech_item" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faLaravel} aria-label="Laravel" className="tech_item" />
                                </span>
                            </div>
                        </Fade>
                    </ContentGridItem>
                    <ContentGridItem two={true} reverse={false} classes="about_text_block">
                        <Fade duration={2000} bottom={true} distance="1.6rem">
                            <h3>Pretty and accessible.</h3>
                            <p>Later in my digital career - better late than never, hey - I realised that the full potential of
                                an inclusive digital world is limitless. This thought shifted my whole perception around web
                                accessibility and universal design.
                            </p>
                            <p>Whilst I aim of making my work as accessible as possible, I also want spread the message
                                that <strong>accessibility and universal design are drivers for innovation</strong> and tools to achieve an
                                inclusive, better, and happier society.
                            </p>
                        </Fade>
                    </ContentGridItem>
                    <ContentGridItem two={true} reverse={false} classes="about_text_block">
                        <Fade duration={2000} bottom={true} distance="1.6rem">
                            <h3>About this portfolio.</h3>
                            <p>This portfolio is powered by REACT and is built in Gatsby. These pages are hand coded from scratch from my onw design.</p>
                        </Fade>
                    </ContentGridItem>
                    <ContentGridItem two={true}>
                        <Bounce delay={500} duration={800} bottom={true}>
                            <Button
                                to="/work"
                                floating={true}
                            >ok, show me your stuff</Button>
                        </Bounce>
                    </ContentGridItem>
                    {/*<ContentGridItem  classes="image-container">*/}
                    {/*    <Bounce duration={800} delay={500} bottom={true}>*/}
                    {/*        <Img fluid={data.firstImage.childImageSharp.fluid} alt="Mixed Tape 1978" className="floating-image"/>*/}
                    {/*    </Bounce>*/}
                    {/*    <div style={{position: 'relative'}}>*/}
                    {/*        <FloatingShapes />*/}
                    {/*    </div>*/}
                    {/*</ContentGridItem>*/}
                </ContentGrid>
            </Section>
        </Layout>
    )
}


export default About

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
    }
`
