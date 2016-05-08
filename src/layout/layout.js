import React from 'react';

import Navbar from '../components/navbar';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      </div>
    )
  }
}