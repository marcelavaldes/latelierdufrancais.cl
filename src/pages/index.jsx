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
import { color1, color2, color3, color4, color5 } from "../layouts/paletteExports.scss";

const HomeCover = ({ mobile }) => {
  return (
    <Grid stackable columns="equal" style={{ minHeight:"100vh" }}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column textAlign="center">
          <Logo width="80" height="80" />
        </Grid.Column>
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
      <Segment
        basic
        style={{
          padding: 0
        }}
      >
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

        <Segment style={{ minHeight: "100vh", backgroundColor: color2 }}>
          <Responsive minWidth={Responsive.onlyMobile.maxWidth} style={{ minHeight: "100vh" }}>
            <HomeCover />
          </Responsive>
          <Responsive {...Responsive.onlyMobile} style={{ minHeight: "100vh" }}>
            <HomeCover mobile />
          </Responsive>
        </Segment>

        <Segment style={{ padding: "5em 0em", backgroundColor: color3 }}>
          <Grid columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2.4em", color: color4 }}>
                  ¿Te gustaría aprender francés?
                </Header>
                <p style={{ fontSize: "1.66em", color: color2 }}>
                  Contamos con clases para individuos o grupos pequeños donde tú armas los horarios,
                  y cursos con horario fijo disponibles durante todo el año.
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em", color: color4 }}>
                  ¿Te gustaría enseñar con nosotros?
                </Header>
                <p style={{ fontSize: "1.66em", color: color2 }}>
                  Únete a nuestro registro de tutores y participa en nuestras actividades.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              <a href="#">Case Studies</a>
            </Divider>

            <Header as="h3" style={{ fontSize: "2em" }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. It took years
              of gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment>
      </Segment>
    );
  }
}

export default Index;
