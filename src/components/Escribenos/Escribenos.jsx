import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import "./Escribenos.scss";

export default class Escribenos extends Component {
  render() {
    return (
      <Form name="AER" method="post" action="/merci" data-netlify="true" data-netlify-honeypot="bot-field" style={{ fontSize: "1.66em" }}>
        <input type="hidden" name="bot-field" />
        <Form.Group widths='equal'>
          <Form.Input fluid type='text' name='name2' label='Nombre' placeholder='Simone de Beauvoir'  />
          <Form.Input fluid type='text' name='email2' label='Correo' placeholder='simone@beauvoir.fr' />
        </Form.Group>
        <label htmlFor="name">
          <p>
            Nombre:
            <input
              type="text"
              name="name"
              id="name"
              required
            />
          </p>
        </label>
        <label htmlFor="email">
          <p>
            Email:
            <input
              type="text"
              name="email"
              id="email"
              required
            />
          </p>
        </label>
        <label htmlFor="message">
          <p>
            Message
            <textarea
              className="notes"
              name="message"
              required
            />
          </p>
        </label>
        <Button type="submit" size="large" color="red">
          Enviar
        </Button>
        <Button type="reset" size="large" color="blue">
          Borrar
        </Button>
      </Form>
    )
  }
}
