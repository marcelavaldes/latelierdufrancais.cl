import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Menu, Header, Image } from 'semantic-ui-react';
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import email from "./email.svg";
import logo from "./logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <Menu
        secondary
        fixed='top'
        style={{
          backgroundColor: '#ffffff'
        }}
      >
        <Menu.Item>
          <Link to="/"
          >
            <Image
              src={logo}
              style={{
                width: '12em',
                //      position: 'fixed',
                zIndex: 1000,
                backgroundColor: '#ffffff'
              }} />
          </Link>
          {/*
            <Header size='huge'>
              <Link to="/"
            style={{
            color:'#000000'
            }}
              >
            {
            `${this.props.title}`
            }
              </Link>
            </Header>
          */}
          {
            //    `${this.getLocalTitle()}`
          }
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            style={{
              paddingLeft: 0,
              paddingRight: 0
            }}
          >
            <Link
              to="/clases"
            >
              <Image
                style={{
                  width: '2em'
                }}
                size='mini'
                src={twitter}
              />
            </Link>
          </Menu.Item>
          <Menu.Item
            style={{
              paddingLeft: 0,
              paddingRight: 0
            }}
          >
            <Link
              to="/cursos"
            >
              <Image
                style={{
                  width: '2em'
                }}
                size='mini'
                src={facebook}
              />
            </Link>
          </Menu.Item>
          <Menu.Item
            style={{
              paddingLeft: 0
            }}
          >
            <Link to="/blog">
              <Image
                style={{
                  width: '2em'
                }}
                size='mini'
                src={email}
              />
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Navbar.propTypes = {
};
