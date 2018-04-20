import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import "./Escribenos.scss";

export default class Escribenos extends Component {
  render() {
    return (
        <Form name="ahorazi" method="post" action="/merci" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
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
                name="message"
                required
              />
            </p>
          </label>
          <input type="submit" value="Send Message" className="special" />
          <input type="reset" value="Clear" />
        </Form>
    )
  }
}
