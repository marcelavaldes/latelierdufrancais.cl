import React, { Component } from "react";
import Helmet from "react-helmet";
import { Segment, Container, Grid, Header, List, Button } from "semantic-ui-react"
import Link from "gatsby-link"
import Precios from "../components/Precios/Precios";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class ClasesPage extends Component {
  constructor() {
    super();
    this.setHeight = this.setHeight.bind(this);
    this.state = { height: 800 }
  }
  setHeight() {
    const height = window.innerHeight - 70;
    this.setState({ height: height })
  }
  componentDidMount() {
    this.setHeight()
    window.addEventListener("resize", this.setHeight, false);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight, false);
  }
  render() {
    const prices = {
      one: [15.000, 60.000, 100.000],
      two: [20.000, 80.000, 140.000],
      three: [15.000, 60.000, 120.000],
    }
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={`Clases | ${config.siteTitle}`} />
        <Segment
          basic
          style={{
            //backgroundColor: 'rgba(200,200,0,.4)',
            minHeight: `${this.state.height}px`,
            padding: '8em 0em'
          }}
        >
          <Grid
            container
            stackable
            verticalAlign='top'
            //columns='equal'
            style={{
                //minHeight: `${this.state.height}px`,
                //marginTop: '8em'
            }}
          >
            <Grid.Row>
              <Grid.Column
                width={10}
              >
                <Header as='h3' style={{ fontSize: '2em' }}>Lecciones individuales</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Ofrecemos pack de lecciones particulares por horas para que dispongas de ellas como tu quieras.
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  Las tarifas son las mismas para todos los niveles y todo el material es provisto por nosotros.
                </p>
              </Grid.Column>
              <Grid.Column
                width={6}
                textAlign='center'
              >
                <Precios title='Lecciones individuales' prices={prices.one} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid
            container
            stackable
            verticalAlign='middle'
            //columns='equal'
            style={{
                //minHeight: `${this.state.height}px`,
                marginBottom: '2em',
                marginTop: '2em'
            }}
          >
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' style={{ fontSize: '2em' }}>Lecciones para grupos pequeños</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Lecciones en grupos pequeños, para aprender con amigos, familia y compañeros.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              columns='equal'
            >

              <Grid.Column
                width={6}
                textAlign='center'
              >
                <Precios title='Grupos de 2 personas' prices={prices.two} />
              </Grid.Column>
              <Grid.Column
                width={6}
                textAlign='center'
              >
                <Precios title='Grupos de 3 personas' prices={prices.three} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Container text>
                  <p style={{ fontSize: '1.33em' }}>
                    Para grupos más grandes, escríbenos y encontraremos la mejor solución.
                  </p>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default ClasesPage;
