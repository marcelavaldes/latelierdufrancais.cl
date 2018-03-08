import React from "react";
import Helmet from "react-helmet";
import { Segment, Container, Grid, Header, List, Button, Table } from "semantic-ui-react"
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
            textAlign='center'
            //columns='equal'
            style={{
                minHeight: `${this.state.height-200}px`,
                //marginTop: '8em'
            }}
          >
            <Grid.Row>
              <Grid.Column
                width={10}
              >
                <p style={{ fontSize: '24px', textAlign: 'center' }}>
                  Te invitamos a los talleres de francés.
                </p>
                <p style={{ fontSize: '24px', textAlign: 'center' }}>

                  Clases particulares y cursos intensivos todo el año.
                </p>
                <p style={{ fontSize: '24px', textAlign: 'center' }}>
                  Estamos en Talca y San Clemente.
                </p>
                <br />
                <Grid
                  columns='equal'
                >
                  <Grid.Row>
                    <Grid.Column>
                      <Link
                        to='/clases'
                      >
                        <Header>
                          Clases particulares
                        </Header>
                      </Link>
                    </Grid.Column>
                    <Grid.Column>
                      <Link
                        to='/cursos'
                      >
                        <Header>
                          Cursos intensivos
                        </Header>
                      </Link>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Link
                        to='/ensena'
                      >
                        <Header>
                          ¿Quieres enseñar?
                        </Header>
                      </Link>
                    </Grid.Column>
                    <Grid.Column>
                      <Link
                        to='/colabora'
                      >
                        <Header>
                          ¿Te gustaría colaborar?
                        </Header>
                      </Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Index;
