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

class DesktopNavbar extends Component {
  render() {
    return (
      <Menu
        fixed="top"
        secondary={true}
        size="small"
        style={{
          backgroundColor: "rgba(255,255,255,.8)",
        }}
      >
        <Container>
          <Menu.Item header>
            <Link to="/" style={{fontSize:'1.3em'}}>{ this.props.currentPage=="" ? null : config.siteTitle }</Link>
          </Menu.Item>
          <Menu.Menu  position="right">
            <Menu.Item>
              <Link to="/clases">Clases</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/cursos">Cursos</Link>
            </Menu.Item>
            <Menu.Item>
              <Button
                as="a" style={{ marginLeft: '0.5em' }}
              >
                Escríbenos
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

DesktopNavbar.propTypes = {
};

class MobileNavbar extends Component {
  constructor() {
    super();
    this.state = {}
  }

  toggleSideMenu = () => {
    this.setState((prevState) => ({ sideMenu: !prevState.sideMenu }))
  }

  render() {
    const { sideMenu } = this.state;
    return (
      <div>
        <Menu
          fixed="top"
          secondary={true}
          size="small"
          style={{
              backgroundColor: "rgba(255,255,255,.8)",
              //opacity: `${fixed ? 1 : 0}`
          }}
        >
          <Container>
            <Menu.Item
              onClick={this.toggleSideMenu}
              style={{
                marginRight: 0
              }}
            >
              <Icon name={ sideMenu ? 'arrow left' : 'sidebar'} />
            </Menu.Item>
            <Menu.Item header
              style={{
                paddingLeft: 0,
                marginLeft: 0
              }}
            >
              <Link
                to="/"
                onClick={ sideMenu ? this.toggleSideMenu : null }
                style={{
                  fontSize:'1.3em'
                }}
              >
                { this.props.currentPage=="" ? null : config.siteTitle }
              </Link>
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                style={{ marginLeft: '0.5em' }}
              >
                Escríbenos
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Sidebar
          as={Menu}
          width='wide'
          animation='overlay'
          direction='left'
          visible={sideMenu}
          vertical
          style={{
            backgroundColor: 'rgba(255,255,255,0)',
            top: 41,
            boxShadow: '0 0 20px rgba(34, 36, 38, 0)',
            border: 0,
            width: '100vh'
          }}
        >
          <Menu.Item
            onClick={this.toggleSideMenu}
            href="/clases"
            name='clases'
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',
              border: 0,
            }}
          >
            Clases particulares
          </Menu.Item>
          <Menu.Item
            onClick={this.toggleSideMenu}
            href="/cursos"
            name='cursos'
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',
              border: 0,
            }}
          >
            Cursos
          </Menu.Item>
          <Menu.Item
            onClick={this.toggleSideMenu}
            href="/ensena"
            name='ensena'
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',
              border: 0,
            }}
          >
            Enseña
          </Menu.Item>
          <Menu.Item
            onClick={this.toggleSideMenu}
            href="/colabora"
            name='colabora'
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',
              border: 0,
            }}
          >
            Colabora
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

MobileNavbar.propTypes = {
};

export default class ResponsiveMenu extends React.Component {
  render() {
    return (
      <div>
        <Responsive minWidth={767}>
          <DesktopNavbar currentPage={this.props.currentPage} />
        </Responsive>
        <Responsive maxWidth={767}>
          <MobileNavbar currentPage={this.props.currentPage} />
        </Responsive>
      </div>
    );
  }
}

ResponsiveMenu.propTypes = {
};
