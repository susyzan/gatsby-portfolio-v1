/**
 * The guys at Gatsby have implemented a hack to get the screen readers to announce the page.
 * However, when a page transition is used, the hack is not working properly.
 * This is the hack for the hack.
 * Note: only use when the original solution doesn't work.
 */

import React from "react";

class RouteAnnouncerHack extends React.Component {

    componentDidMount() {
        document.getElementById('gatsby-announcer').innerHTML = `Navigated to ${this.props.title}`;
    }

    render() {
        return (
            <div title={this.props.title} style={{display: 'none'}}></div>
        )
    }
}

export default RouteAnnouncerHack