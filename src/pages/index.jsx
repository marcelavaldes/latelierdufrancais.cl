import React from "react";
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
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const HomepageHeading = ({ mobile }) => (
  <Container text textAlign="center">
    <Header
      as={mobile ? "h3" : "h1"}
      content={config.siteTitle}
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: mobile ? false : "normal",
        marginTop: mobile ? "0em" : "0em",
        marginBottom: mobile ? "0em" : ".4em"
      }}
    />
    <Header
      as="h2"
      content="Aprende a tu ritmo con clases personalizadas de francés en Talca y San Clemente."
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        //marginTop: mobile ? "0.5em" : "1.5em",
        marginBottom: mobile ? "1em" : "1.5em"
      }}
    />
    <Button
      style={{
        marginBottom: mobile ? "8em" : "3em"
      }}
    >
      Leer más...
      <Icon name="right arrow" />
    </Button>
  </Container>
);

class Index extends React.Component {
  constructor() {
    super();
    this.setHeight = this.setHeight.bind(this);
    this.state = { height: 800 };
  }
  setHeight() {
    const height = window.innerHeight;
    this.setState({ height: height });
  }
  componentDidMount() {
    this.setHeight();
    window.addEventListener("resize", this.setHeight, false);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight, false);
  }
  render() {
    return (
      <div
        style={this.props.transition && this.props.transition.style}
        className="index-container"
      >
        <Helmet title={config.siteTitle} />

        <Segment basic style={{ minHeight: `${this.state.height-136}px` }}>
          <Grid style={{ minHeight: `${this.state.height-136}px` }}>
            <Grid.Column verticalAlign='middle'>
              <Responsive maxWidth={767}>
                <HomepageHeading mobile />
              </Responsive>
              <Responsive minWidth={767}>
                <HomepageHeading />
              </Responsive>
            </Grid.Column>
          </Grid>
        </Segment>

        <Segment
          style={{
            padding: "8em 0em",
            backgroundColor: "rgba(255,255,255,.8)"
          }}
          vertical
          //raised
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Lecciones
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Diseñadas para individuos o grupos pequeños donde tú armas tu horario.
                </p>
                <Button
                  style={{
                    position: 'relative',
                    right: 0
                  }}
                >
                  Lecciones
                </Button>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Cursos
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  lalala
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="//via.placeholder.com/350x150"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  ¿Te gustaría enseñar?
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  ¿Te gustaría colaborar?
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Image avatar src="//via.placeholder.com/350x150" />
                  <b>Nan</b> Chief Fun Officer Acme Toys
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
      </div>
    );
  }
}

export default Index;
