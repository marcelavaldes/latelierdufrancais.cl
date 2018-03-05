import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link"
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Input, Icon, Segment } from 'semantic-ui-react'
import config from "../../data/SiteConfig";
import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import Navbar from "../components/Navbar/Navbar"

export default class MainLayout extends Component {
  state = { activeItem: 'home' }

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
      <Segment
        basic
      >
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navbar title={config.siteTitle}/>
        <div style={this.props.transition && this.props.transition.style}>
          {this.props.children()}
        </div>
      </Segment>
    );
  }
}
