import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './assistant';

document.addEventListener('DOMContentLoaded', ()=> {
  const container = document.body.appendChild(document.createElement('div'));
  ReactDOM.render(<Assistant/>, container)
})