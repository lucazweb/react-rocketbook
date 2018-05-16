import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = { };
  }


  render() {
    return (
      <Fragment>
        <header>
          <h1>RocketBook</h1>
        </header>

        <div className="container">
          <div className="feeder">
            <div className="post">
              <div className="post-header">
                <div className="profile-pic"> <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" /></div>
                <div className="post-info">
                  <h2>Karina Schindler</h2>
                  <span> há 3 min </span>
                </div>
              </div>
              <div className="post-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto amet, itaque, ut iure aperiam molestias laudantium nostrum laboriosam similique aut necessitatibus et non atque sit ad veritatis. Enim, ad tenetur.</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
