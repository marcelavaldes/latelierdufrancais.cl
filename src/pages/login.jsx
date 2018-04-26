import React from 'react';
import Link from 'gatsby-link';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Logo from '../components/Logo/Logo';

const Login = () => (
  <Segment
    basic
    style={{ padding: 0, minHeight: '100vh' }}
    vertical
  >
    <Grid
      textAlign='center'
      style={{ minHeight: '100vh', margin: 0 }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          <Logo />
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </Segment>
)
export default Login
