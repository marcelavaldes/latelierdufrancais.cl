import React, { Component } from "react";
import Helmet from "react-helmet";
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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    fixed: true
  };

  hideFixedMenu = () => {
    this.setState({ fixed: this.props.title == "" ? false : true });
    console.log(this.state);
  }
  showFixedMenu = () => {
    this.setState({ fixed: true });
    console.log(this.state);
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { title } = this.props;

    return (
      <Responsive {...Responsive.onlyComputer}>
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
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar
          width="wide"
          as={Menu}
          animation="overlay"
          vertical
          visible={sidebarOpened}
          style={{
            position: "fixed",
            top: 50,
            backgroundColor: "rgba(255,255,255,.8)"
          }}
        >
          <Menu.Item active>
            <Link to="/" onClick={this.handleToggle}>
              <Header as="h1">Inicio</Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/clases" onClick={this.handleToggle}>
              <Header as="h1">Clases particulares</Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cursos" onClick={this.handleToggle}>
              <Header as="h1">Cursos</Header>
            </Link>
          </Menu.Item>
        </Sidebar>
        <Menu
          //inverted
          //pointing
          secondary
          size="mini"
          fixed="top"
          style={{
            backgroundColor: "rgba(255,255,255,.8)"
          }}
        >
          <Menu.Item onClick={this.handleToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item header>
            <Header as="h1">
              <Link to="/">
                {
                  //config.siteTitle
                }
              </Link>
            </Header>
          </Menu.Item>
          <Menu.Item
            position="right"
            style={
              {
                //              marginRight: '0px -13px 0px 0px'
              }
            }
          >
            <Button
              as="a"
              style={{
                margin: 0
              }}
            >
              Escríbenos
            </Button>
          </Menu.Item>
        </Menu>
        {/*
          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
          <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
          <Container>

          </Container>
          {
          //  <HomepageHeading mobile />
          }
          </Segment>

          </Sidebar.Pusher>
        */}
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children, title }) => (
  <div>
    <DesktopContainer title={title}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
