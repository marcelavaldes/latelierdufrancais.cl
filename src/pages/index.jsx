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
import logo from "../components/Logo/logo.svg";
import Logo from '../components/Logo/Logo';

const HomepageHeading = ({ mobile }) => (
  <Container text textAlign="center">
    {
      //  <Image src={logo} />
      <Logo width="80" height="80" />
    }
    <Header
      //as={mobile ? "h1" : "h1"}
      content={config.siteTitle}
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: mobile ? false : false,
      }}
    />
    <Header
      as="h2"
      content="Aprende a tu ritmo con clases personalizadas de francés en Talca y San Clemente."
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
      }}
    />
    <Button>
      Leer más...
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const HomepageCover = ({ mobile, height }) => {
  return (
    <Segment
      basic
      style={{
        padding: mobile ? "2vh 1vw" : "1vh 2vw",
        //backgroundColor: "rgba(51,204,204,1)",
        minHeight: `${height}px`
      }}
      vertical
    >
      <Grid stackable verticalAlign="middle" style={{ minHeight: `${height}px` }}>
        <Grid.Row columns="equal">
          <Grid.Column
            textAlign="center"
          >
            {
              mobile ?
                <Header
                  as="h1"
                  style={{
                    fontSize: mobile ? "10vw" : "10vw",
                  }}
                >
                  {
                      //config.siteTitle
                  }
                  L'atelier
                  <span
                    style={{
                      fontSize: mobile ? "10vw" : null,
                        lineHeight: "10vh",
                      display: mobile ? null : "block"
                    }}
                  >
                    du
                  </span>
                  Français
                </Header>
              :
              null
            }
            <Image
              size="massive"
              src={logo}
            />
          </Grid.Column>
          <Grid.Column
            textAlign={ mobile ? "center" : "left" }
          >
            {
              mobile ?
                null
              :
              <Header
                as="h1"
                style={{
                  fontSize: mobile ? "10vw" : "10vw",
                }}
              >
                {
                  //config.siteTitle
                }
                L'atelier
                <span
                  style={{
                    fontSize: mobile ? "10vw" : null,
                    lineHeight: "10vh",
                    display: mobile ? null : "block"
                  }}
                >
                  du
                </span>
                Français
              </Header>
            }
            <p style={{ fontSize: "1.6em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing.
            </p>
            <Button
              style={{
                //position: 'relative',
                //right: 0
              }}
            >
              Lecciones
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

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
      <Segment
        basic
        style={{
          padding: 0
        }}
      >
        <Helmet title={config.siteTitle} />


        <Responsive maxWidth={767}>
          <HomepageCover mobile height={this.state.height} />
        </Responsive>
        <Responsive minWidth={767}>
          <HomepageCover height={this.state.height} />
        </Responsive>


        <Segment basic style={{ minHeight: `${this.state.height}px` }}>
          <Grid style={{ minHeight: `${this.state.height}px` }}>
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
              <Grid.Column width={8}>
                <Image
                  //bordered
                  rounded
                  size="huge"
                  //src="//via.placeholder.com/350x150"
                  src={logo}
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
      </Segment>
    );
  }
}

export default Index;
