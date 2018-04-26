import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import "./Escribenos.scss";

export default class Escribenos extends Component {
  render() {
    return (
      <Form name="LEGAL" method="post" action="/merci" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <Form.Group widths='equal'>
          <Form.Input className="inputs" fluid type='text' name='name' label={<span>Nombre</span>} placeholder='Simone de Beauvoir' required />
          <Form.Input className="inputs" fluid type='text' name='email' label={<span>Email</span>} placeholder='simone@beauvoir.fr' required />
        </Form.Group>
        <Form.TextArea className="inputs" name="message" label={<span>Mensaje</span>} placeholder='Cuéntanos tu idea, consulta, blabla blablabla' required />
        <Button type="submit" size="large" color="red">
          Enviar
        </Button>
        <Button type="reset" size="large" color="blue">
          Borrar
        </Button>
      </Form>
    );
  }
}
