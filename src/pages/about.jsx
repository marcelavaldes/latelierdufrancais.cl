import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div style={this.props.transition && this.props.transition.style} className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
      </div>
    );
  }
}

export default AboutPage;
