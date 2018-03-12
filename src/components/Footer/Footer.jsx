import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";
import flores from "./flores2.svg"
import { Segment, Container, Grid, Header, List, Image } from 'semantic-ui-react'
import Escribenos from "../Escribenos/Escribenos"

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <Segment vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header as='h4' content='About' />
                <List link>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h4' content='Services' />
                <List link>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header as='h4'>Footer Header</Header>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Image
          src={flores}
          style={{
            position: 'absolute',
            minWidth: '800px',
            bottom: 0,
            right: 0,
            zIndex: -1000,
            //opacity: .4
          }}
        />
      </Segment>
    );
  }
}

export default Footer;
