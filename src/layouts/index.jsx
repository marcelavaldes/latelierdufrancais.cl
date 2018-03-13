import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from 'prop-types'

import ResponsiveContainer from "../components/ResponsiveContainer/ResponsiveContainer"
import Footer from "../components/Footer/Footer"

import config from "../../data/SiteConfig";
import pattern from './pattern.svg'
import 'semantic-ui-css/semantic.min.css';
import "./index.css";

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
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about") {
      title = "About";
    } else if (currentPath === "cursos") {
      title = "Cursos";
    } else if (currentPath === "clases") {
      title = "Clases";
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
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ResponsiveContainer>
          <div
            style={{
              marginTop: '50px',
              background: `url(${pattern})`,
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover'
            }}
          >
            {this.props.children()}
          </div>
          <Footer config={config}/>
        </ResponsiveContainer>
      </div>
    );
  }
}
