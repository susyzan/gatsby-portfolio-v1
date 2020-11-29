import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "./about.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Button from "../components/button";
import RouteAnnouncerHack from "../components/routeAnnouncerHack";
import ContentGrid from "../components/layout/contentgrid";
import ContentGridItem from "../components/layout/contentgriditem";
import FloatingShapes from "../components/floatingshapes";

const About = ({data}) => {
    const pageTitle = "About - Susanna Zanatta";
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle}/>
            <Section id="banner" bg="bg_transparent">
                <Banner>
                    <Fade duration={2000} left={true} distance="1rem">
                        <h2>About.</h2>
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
                    <ContentGridItem full={true} classes="center">
                        <Fade duration={2000} bottom={true} distance="1rem">
                            <h3>Pretty and accessible.</h3>
                            <p>Later in my digital career - better late than never, hey - I realised that the full potential of
                                an inclusive digital world is limitless, and shifted my whole perception around web
                                accessibility and universal design. Whilst I aim of making my work as accessible as possible, I also want spread the message
                                that web accessibility and universal design are drivers for innovation and tools to achieve an
                                inclusive, better, and happier society.</p>
                        </Fade>
                    </ContentGridItem>
                    <ContentGridItem two={true} reverse={false}>
                        <Fade duration={2000} bottom={true} distance="1rem">
                            <h3>Background.</h3>
                            <p>I am dual Italian and Australian citizen and I currently live in Scotland. I lived in Australia
                                for the past few years where I discovered just how cool the digital side of the world is and
                                started doing that for a living.</p>
                            <p>As a web developer, I have successfully delivered a range of projects working within both
                                corporate organisations and agencies. My work includes websites, landing pages, web apps, and
                                EDM campaigns for government departments and large corporate clients.</p>
                            <p>Outside of work, I like to learn new stuff. I currently study towards a Bachelor Degree in IT
                                and Data Analytic. No need to say I am also coffee, beer, wine and food lover. So yeah, I do that as well.</p>
                        </Fade>
                        <Bounce delay={800} duration={800} bottom={true}>
                            <Button
                                to="/work"
                                floating={true}
                            >show me your stuff</Button>
                        </Bounce>
                    </ContentGridItem>
                    <ContentGridItem  classes="image-container">
                        <Bounce duration={800} delay={500} bottom={true}>
                            <Img fluid={data.firstImage.childImageSharp.fluid} alt="Mixed Tape 1978" className="floating-image"/>
                        </Bounce>
                        <div style={{position: 'relative'}}>
                            <FloatingShapes />
                        </div>
                    </ContentGridItem>
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
