import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Segment, Grid, Header, Responsive } from 'semantic-ui-react';
import Logo from '../components/Logo/Logo';

const PageLayout = ({mobile}) => (
  <Segment
    basic
    style={{ padding: 0, minHeight: '100vh' }}
    vertical
  >
    <Grid
      container
      textAlign='center'
      style={{ minHeight: '100vh', margin: 0 }}
      verticalAlign='middle'
      stackable
    >
      <Grid.Column width={6} align='center'>
        <Link to="/">
          <Logo />
        </Link>
      </Grid.Column>
      <Grid.Column width={8} align='center'>
        <Header as='h2' textAlign='center'>
          Merci
        </Header>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default class Merci extends Component {
  render() {
    return (
      <Segment basic style={{ minHeight: "100vh", padding: 0 }} vertical>
        <Responsive minWidth={Responsive.onlyMobile.maxWidth} style={{ minHeight: "100vh" }}>
          <PageLayout />
        </Responsive>
        <Responsive {...Responsive.onlyMobile} style={{ minHeight: "100vh" }}>
          <PageLayout mobile />
        </Responsive>
      </Segment>
    );
  }
}
