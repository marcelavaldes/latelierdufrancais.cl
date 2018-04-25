import React, { Component } from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';

export default class Merci extends Component {
  render() {
    return (
      <Segment basic style={{ minHeight: "100vh", padding: 0 }} vertical>
        <Grid stackable columns="equal" style={{ minHeight:"100vh", margin: 0 }}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column textAlign="center">
              <Header>
                Merci!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
