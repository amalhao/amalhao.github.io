import React from 'react';

export default class PageNavbarItem extends React.Component {
  render() {
    return (
      <li className="navbar-item"><a className="navbar-link" href={this.props.hashLink}>{this.props.label}</a></li>
    )
  }
}