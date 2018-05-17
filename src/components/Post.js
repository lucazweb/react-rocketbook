import React, { Component } from 'react';
import PostHeader from './PostHeader';

export default class Post extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="post">
        <PostHeader autor={this.props.data.autor} foto={this.props.data.foto} time={this.props.data.time} />
        <div className="post-content">
          <p>{this.props.data.comentario}</p>
        </div>
      </div>
    );
  }
}
