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
import colabora from "../images/colabora.svg";
import aprende from "../images/aprende.svg";

const Index = ({ mobile }) => {
    return (
      <Segment basic style={{ padding: 0 }} vertical>
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

        <Segment basic style={{ minHeight: "100vh", padding: 0 }} vertical>
          <Grid stackable columns="equal" style={{ minHeight:"100vh", margin: 0 }}>
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
        </Segment>

        <Segment basic vertical>
          <Container style={{ paddingTop: "4em", paddingBottom: "12em" }} text>
            <Header as="h3" style={{ fontSize: "2.4em" }}>
              Bonjour, mon amis :D
            </Header>
            <p style={{ fontSize: "1.66em" }}>
              Contamos con clases para individuos o grupos pequeños donde tú armas los horarios,
              y cursos con horario fijo disponibles durante todo el año.
            </p>
          </Container>
        </Segment>

        <Segment basic style={{ padding: "8em 1em" }} vertical>
          <Grid container stackable>
            <Grid.Row textAlign="center" columns="equal">
              <Grid.Column>
                <Image
                  src={aprende}
                  size="small"
                  centered
                />
                <Header as="h3" style={{ fontSize: "2.4em" }}>
                  ¿Te gustaría aprender?
                </Header>
                <p style={{ fontSize: "1.66em" }}>
                  Contamos con clases para individuos o grupos pequeños donde tú armas los horarios,
                  y cursos con horario fijo disponibles durante todo el año.
                </p>
                <Button as="a" size="large" color="red">
                  Aprende
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={colabora}
                  size="small"
                  centered
                />
                <Header as="h3" style={{ fontSize: "2.4em" }}>
                  ¿Te gustaría colaborar?
                </Header>
                <p style={{ fontSize: "1.66em" }}>
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

        <Segment basic vertical>
          <Container style={{ paddingTop: "4em", paddingBottom: "12em" }} text>
            <Header as="h3" style={{ fontSize: "2.4em" }}>
              Escríbenos
            </Header>
            <Escribenos />
          </Container>
        </Segment>

      </Segment>
  );
}

export default Index;
