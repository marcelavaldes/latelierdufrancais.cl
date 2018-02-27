import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class CursosPage extends Component {
  render() {
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={`Cursos | ${config.siteTitle}`} />
        <h1>Cursos</h1>
      </div>
    );
  }
}

export default CursosPage;
