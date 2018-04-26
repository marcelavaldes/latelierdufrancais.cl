import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { Segment, Container, Header } from "semantic-ui-react"
//import ResponsiveMenu from "../components/ResponsiveMenu/ResponsiveMenu";
import Footer from "../components/Footer/Footer";

import config from "../../data/SiteConfig";

import '../semantic/dist/semantic.min.css';
//import 'semantic-ui-less/semantic.less';
import "./index.scss";

export default class MainLayout extends Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about") {
      title = "About";
    } else if (currentPath === "cursos") {
      title = "Cursos";
    } else if (currentPath === "clases") {
      title = "Clases particulares";
    } else if (currentPath.indexOf("posts")) {
      title = "Blog";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }

  render() {
    const lala = this.state
    return (
      <Segment basic style={{ padding: 0 }} vertical>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {
          //<ResponsiveMenu currentPage={this.getLocalTitle()} config={config}/>
        }

        {
          this.props.children({...this.props, lala})
        }
        <Footer config={config} />
      </Segment>
    );
  }
}
