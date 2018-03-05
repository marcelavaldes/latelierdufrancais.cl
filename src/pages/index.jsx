import React from "react";
import Helmet from "react-helmet";
import { Segment, Container, Grid, Header, List, Button } from "semantic-ui-react"
import Link from "gatsby-link"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
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
    return (
      <div style={this.props.transition && this.props.transition.style} className="index-container">
        <Helmet title={config.siteTitle} />
        <Segment
          basic
          style={{
            //backgroundColor: 'rgba(200,200,0,.4)',
            minHeight: `${this.state.height}px`,
          }}
        >
          <Grid
            container
            stackable
            verticalAlign='middle'
            //columns='equal'
            style={{
                minHeight: `${this.state.height}px`,
            }}
          >
            <Grid.Row>
              <Grid.Column
                width={10}
              >
                <p style={{ fontSize: '24px', textAlign: 'justify' }}>
                  Clases de francés a tu ritmo, con tu familia o amigos, para aprender el idioma y la cultura francesa. Locaciones en Talca y San Clemente, pronto Curicó y Cauquenes.
                </p>
              </Grid.Column>
              <Grid.Column
                width={6}
                textAlign='center'
              >

                <Link
                  to="/clases"
                >
                  <p style={{ fontSize: '24px' }}>
                    ¿Quieres aprender?
                  </p>
                </Link>

                <Link
                  to="/cursos"
                >
                  <p style={{ fontSize: '24px' }}>
                    ¿Quieres enseñar?
                  </p>
                </Link>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Index;
