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
          }}
        >
          <Grid
            //container
            stackable
            verticalAlign='middle'
            //columns='equal'
            style={{
                //minHeight: `${this.state.height}px`,
                marginTop: '2em'
            }}
          >
            <Grid.Row>
              <Grid.Column
                width={10}
              >
                <p style={{ fontSize: '24px', textAlign: 'justify' }}>
                  Ofrecemos pack de lecciones pre-pagadas de 5 a 10 horas (para ser agrupadas a tu gusto) como también lecciones de 1 hora.
                  Las tarifas son las mismas para todos los niveles y todo el material es provisto por nosotros.
                </p>
              </Grid.Column>
              <Grid.Column
                width={6}
                textAlign='center'
              >
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row
              columns='equal'
              verticalAlign='top'
            >
              <Grid.Column>
                <Precios title='1 Persona' prices={prices.one} />
              </Grid.Column>
              <Grid.Column>
                <Precios title='2 Personas' prices={prices.two} />
              </Grid.Column>
              <Grid.Column>
                <Precios title='3 Personas' prices={prices.three} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default ClasesPage;
