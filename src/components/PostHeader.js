import React, { Component } from 'react';

export default class PostHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="post-header">
        <div className="profile-pic"> <img src={this.props.foto} alt="" /></div>
        <div className="post-info">
          <h2>{this.props.autor}</h2>
          <span> há {this.props.time} min </span>
        </div>
      </div>
    );
  }
}
