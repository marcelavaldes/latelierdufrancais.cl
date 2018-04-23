import React, { Component } from "react";
import Helmet from "react-helmet";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Table,
  Divider,
  Image,
  Icon,
  Responsive
} from "semantic-ui-react";
import Link from "gatsby-link";
import config from "../../data/SiteConfig";
import Logo from '../components/Logo/Logo';
import Escribenos from '../components/Escribenos/Escribenos';

import { color1, color2, color3, color4, color5 } from "../layouts/paletteExports.scss";

const HomeCover = ({ mobile }) => {
  return (
    <Grid stackable columns="equal" style={{ minHeight:"100vh" }}>
      <Grid.Row verticalAlign="middle">
        { mobile
          ? null
          :
          <Grid.Column textAlign="center">
            <Logo width="80" height="80" />
          </Grid.Column>
        }
        <Grid.Column textAlign={ mobile ? "center" : "left" }>
          <Header
            as="h3"
            style={{
              fontSize: mobile ? "22vw" : "8vw",
            }}
          >
            L'atelier <span style={{ lineHeight: "0.5em", display:"block" }}>du</span> Français
          </Header>
          <p style={{ fontSize: "2em" }}>
            Somos una comunidad en torno a la lengua y cultura francesa.
            <br />
            Realizamos nuestros talleres y actividades en la Región del Maule.
            <br />
          </p>
          <Button as="a" size="large" color="red">
            Saber más...
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

class Index extends Component {
  render() {
    return (
      <Segment basic vertical>
        <Helmet title={config.siteTitle}>
          {/* General tags */}
          <meta name="description" content={config.siteDescription} />
          <meta name="image" content={config.siteUrl + config.siteLogo} />
          {/* Schema.org tags */}
          {/*
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
          */}
          {/* OpenGraph tags */}
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:description" content={config.siteDescription} />
          <meta property="og:image" content={config.siteUrl + config.siteImage} />
          <meta property="fb:app_id" content={config.siteFBAppID}
          />
          {/* Twitter Card tags */}
          {/*
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:creator"
              content={config.userTwitter ? config.userTwitter : ""}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          */}
        </Helmet>

        <Segment basic style={{ minHeight: "100vh", backgroundColor: color2 }} vertical>
          <Responsive minWidth={Responsive.onlyMobile.maxWidth} style={{ minHeight: "100vh" }}>
            <HomeCover />
          </Responsive>
          <Responsive {...Responsive.onlyMobile} style={{ minHeight: "100vh" }}>
            <HomeCover mobile />
          </Responsive>
        </Segment>

        <Segment basic style={{ backgroundColor: color2 }} vertical>
          <Container style={{ paddingTop: "4em", paddingBottom: "12em" }} text>
            <Header as="h3" style={{ fontSize: "2.4em", color: color4 }}>
              Bonjour, mon amis :D
            </Header>
            <p style={{ fontSize: "1.66em", color: color3 }}>
              Contamos con clases para individuos o grupos pequeños donde tú armas los horarios,
              y cursos con horario fijo disponibles durante todo el año.
            </p>
          </Container>
        </Segment>

        <Segment basic style={{ padding: "8em 1em", backgroundColor: color3 }} vertical>
          <Grid container stackable>
            <Grid.Row textAlign="center" columns="equal">
              <Grid.Column>
                <Header as="h3" style={{ fontSize: "2.4em", color: color4 }}>
                  ¿Te gustaría aprender?
                </Header>
                <p style={{ fontSize: "1.66em", color: color2 }}>
                  Contamos con clases para individuos o grupos pequeños donde tú armas los horarios,
                  y cursos con horario fijo disponibles durante todo el año.
                </p>
                <Button as="a" size="large" color="blue">
                  Aprende
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" style={{ fontSize: "2.4em", color: color4 }}>
                  ¿Te gustaría colaborar?
                </Header>
                <p style={{ fontSize: "1.66em", color: color2 }}>
                  Todas las propuestas son bienvenidas, cuéntanos tu idea.
                  Si lo que quieres es enseñar, únete a nuestro registro de tutores.
                </p>
                <Button as="a" size="large" color="red">
                  Colabora
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "5em 0em", backgroundColor: color4 }} vertical>
          <Grid container centered>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header as="h3" style={{ fontSize: "2.4em", color: color3 }}>
                  Escríbenos
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                <Escribenos />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </Segment>
    );
  }
}

export default Index;
