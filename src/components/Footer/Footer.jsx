import React, { Component } from "react";
import Link from "gatsby-link";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Segment vertical style={{ padding: '5em 0em', fontSize: '1.66em' }}>
        <Container>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header as='h1' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h1' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header as='h1'>Footer Header</Header>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
