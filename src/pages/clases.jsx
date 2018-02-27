import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class ClasesPage extends Component {
  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={`Clases | ${config.siteTitle}`} />
        <h1>Clases</h1>
      </div>
    );
  }
}

export default ClasesPage;
