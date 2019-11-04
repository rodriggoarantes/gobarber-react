import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1>Hello World</h1>
      </Container>
    );
  }
}
