import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link"
import PropTypes from 'prop-types'
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
} from 'semantic-ui-react'

import config from "../../../data/SiteConfig";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu} style={{height: 400, position: 'absolute'}}>
          <Menu
            //fixed={fixed ? 'top' : null}
            fixed='top'
            //inverted={!fixed}
            //pointing={!fixed}
            //secondary={!fixed}
            size='small'
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',
              //display: `${ fixed ? 'block' : 'none' }`
              opacity: `${ fixed ? 1 : 0 }`
            }}
          >
            <Container>
              <Menu.Item active header>
                <Link
                  to='/'
                >
                  {config.siteTitle}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to='/clases'
                >
                  Clases
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to='/cursos'
                >
                  Cursos
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  to='/colabora'
                >
                  Colabora
                </Link>
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' /*inverted={!fixed}*/ primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
              </Menu.Item>
            </Container>
          </Menu>

          {
              //<HomepageHeading />
          }
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar
          width='wide'
          as={Menu}
          animation='overlay'
          vertical
          visible={sidebarOpened}
          style={{
            position: 'fixed',
            top: 50,
            backgroundColor: 'rgba(255,255,255,.8)'
          }}
        >
          <Menu.Item
            active
          >
            <Link
              to='/'
              onClick={this.handleToggle}
            >
              <Header as='h1'>
                Inicio
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to='/clases'
              onClick={this.handleToggle}
            >
              <Header as='h1'>
                Clases particulares
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to='/cursos'
              onClick={this.handleToggle}
            >
              <Header as='h1'>
                Cursos
              </Header>
            </Link>
          </Menu.Item>
        </Sidebar>
        <Menu
          //inverted
          //pointing
          secondary
          size='mini'
          fixed='top'
          style={{
            backgroundColor: 'rgba(255,255,255,.8)',
          }}
        >
          <Menu.Item onClick={this.handleToggle}>
            <Icon name='sidebar' />
          </Menu.Item>
          <Menu.Item header>
            <Header
              as='h1'
            >
              <Link
                to='/'
              >
                {
                  //config.siteTitle
                }
              </Link>
            </Header>
          </Menu.Item>
          <Menu.Item position='right'
            style={{
              //              marginRight: '0px -13px 0px 0px'
            }}>
            <Button as='a'
              style={{
                margin: 0,
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
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
