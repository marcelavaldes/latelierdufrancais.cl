import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import "./Escribenos.scss";

export default class Escribenos extends Component {
  render() {
    return (
      <Form name="LEGAL" method="post" action="/merci" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <Form.Group widths='equal'>
          <Form.Input fluid type='text' name='name' label='Nombre' placeholder='Simone de Beauvoir' required />
          <Form.Input fluid type='text' name='email' label='Email' placeholder='simone@beauvoir.fr' required />
        </Form.Group>
        <Form.TextArea name="message" label='Mensaje' placeholder='Cuéntanos tu idea, consulta, blabla blablabla' required />
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
