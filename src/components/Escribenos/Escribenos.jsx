import React, { Component } from 'react';
import { Label, Header } from 'semantic-ui-react';

export default class Escribenos extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ok, ' + this.state.value + ', te contactaremos a la brevedad.');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="contactos" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        {console.log(this.state)}
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
