import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    //const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={this.props.transition && this.props.transition.style} className="index-container">
        <Helmet title={config.siteTitle} />
        {
        //  <SEO postEdges={postEdges} />
        }
      </div>
    );
  }
}

export default Index;
