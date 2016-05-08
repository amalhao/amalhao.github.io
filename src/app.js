import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Navbar from './components/navbar';

jQuery(function() {
  ReactDOM.render(
    <Navbar />,
    document.getElementById('layout')
  );
});