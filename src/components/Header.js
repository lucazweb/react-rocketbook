import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = { titulo: 'RocketBook' };
  }

  render() {
    return (
      <header>
        <h1>{this.state.titulo}</h1>
      </header>
    );
  }
}
