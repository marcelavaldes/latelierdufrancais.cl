import React, { Component } from 'react';
import Link from "gatsby-link";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Input
} from "semantic-ui-react";

import config from "../../../data/SiteConfig";

export default class TopBar extends Component {
  constructor() {
    super();
    this.state = { }
    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
  }

  hideFixedMenu = () => {
    this.setState({
      fixed: this.props.currentPage=="" ? false : true
    });
    console.log(this.state);
  }

  showFixedMenu = () => {
    this.setState({
      fixed: true
    });
    console.log(this.state);
  }
  componentDidMount() {
    this.hideFixedMenu();
  }
  render() {
    const { fixed } = this.state;
    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
        style={{
            height: 200,
            position: "absolute"
        }}
      >
        <Menu
          fixed="top"
          secondary={true}
          size="small"
          style={{
              backgroundColor: "rgba(255,255,255,.8)",
              opacity: `${fixed ? 1 : 0}`
          }}
        >
          <Container>
            <Menu.Item header>
              <Link to="/">{config.siteTitle}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/clases">Clases</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/cursos">Cursos</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/colabora">Colabora</Link>
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                as="a" /*inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}*/
              >
                Escríbenos
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

TopBar.propTypes = {
};
