import React from "react"
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Banner from "../components/banner"
import SEO from "../components/seo"
import Button from "../components/button";
import RouteAnnouncerHack from "../components/routeAnnouncerHack";

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
                        <h2>About Susie</h2>
                    </Fade>
                </Banner>
            </Section>
            <Section bg="bg_transparent">
                <Fade duration={2000} bottom={true} distance="1rem">
                    <h3>Where do I want to be in 5 years</h3>
                    <p>In an inclusive digital world.</p>
                    <p>Later in my digital career - better late than never, hey - I realised that the full potential of
                        an inclusive digital world is limitless, and that shifted my whole perception around web
                        accessibility and universal design.</p>
                    <p>Whilst I aim of making accessibility an healthy habit of mine, I also want spread the message
                        that web accessibility and universal design are drivers for innovation and tools to achieve an
                        inclusive, better, and happier society.</p>
                    <p>Also, pretty and accessible are no strangers</p>
                </Fade>
                <Fade duration={2000} bottom={true} distance="1rem">
                    <h3>Let me tell you more about me</h3>
                    <p>I currently live in Scotland and I am dual Italian and Australian citizen. I lived in Australia
                        for the past few years where I discovered just how cool the digital side of the world is and
                        started doing that for a living.</p>
                    <p>As a web developer, I have successfully delivered a range of projects working within both
                        corporate organisations and agencies. My work includes websites, landing pages, web apps, and
                        EDM campaigns for government departments and large corporate clients.</p>
                    <p>Outside of work, I like to learn new stuff and I currently study towards a Bachelor Degree in IT
                        and Data Analytic.</p>
                    <p>No need to say I am also coffee, beer, wine and food lover. So yeah, I do that as well.</p>
                    <p>Feel free to browse around and if you like my work please get in touch.</p>
                </Fade>
                <Bounce delay={1000} duration={1000} bottom={true}>
                    <Button
                        to="/work"
                        floating={true}
                    >show me your stuff</Button>
                </Bounce>
                <Fade duration={2000} bottom={true} distance="1rem">
                    <h3>Where do I want to be in 5 years</h3>
                    <p>In an inclusive digital world.</p>
                    <p>Later in my digital career - better late than never, hey - I realised that the full potential of
                        an inclusive digital world is limitless, and that shifted my whole perception around web
                        accessibility and universal design.</p>
                    <p>Whilst I aim of making accessibility an healthy habit of mine, I also want spread the message
                        that web accessibility and universal design are drivers for innovation and tools to achieve an
                        inclusive, better, and happier society.</p>
                    <p>Also, pretty and accessible are no strangers</p>
                </Fade>
                <Fade duration={2000} bottom={true} distance="1rem">
                    <h3>Let me tell you more about me</h3>
                    <p>I currently live in Scotland and I am dual Italian and Australian citizen. I lived in Australia
                        for the past few years where I discovered just how cool the digital side of the world is and
                        started doing that for a living.</p>
                    <p>As a web developer, I have successfully delivered a range of projects working within both
                        corporate organisations and agencies. My work includes websites, landing pages, web apps, and
                        EDM campaigns for government departments and large corporate clients.</p>
                    <p>Outside of work, I like to learn new stuff and I currently study towards a Bachelor Degree in IT
                        and Data Analytic.</p>
                    <p>No need to say I am also coffee, beer, wine and food lover. So yeah, I do that as well.</p>
                    <p>Feel free to browse around and if you like my work please get in touch.</p>
                </Fade>
                <Bounce delay={1000} duration={1000} bottom={true}>
                    <Button
                        to="/work"
                        floating={true}
                    >show me your stuff</Button>
                </Bounce>
            </Section>
        </Layout>
    )
}


export default About

export const query = graphql`
    {
        image: file(
            relativePath: { eq: "susie.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1184) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
