import React, { Component } from 'react';
import { Label, Header } from 'semantic-ui-react';

export default class Escribenos extends Component {
  render() {
    return (
      <form name="contact" method="POST" netlify="true">
        <p>
          <label>
            "Tu nombre:"
            <input type="text" name="name" />
          </label>   
        </p>
        <p>
          <label>
            "Tu correo:"
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            "Mensaje:"
            <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    );
  }
}
