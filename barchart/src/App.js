import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartWrapper from './ChartWrapper';
import GenderDropdown from './GenderDropdown';

class App extends Component {
  state = {
    gender: "men"
  }

  genderSelected = (gender) => this.setState({ gender })

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Barchartly</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}><GenderDropdown genderSelected={this.genderSelected} /></Col>
          </Row>
          <Row>
            <Col xs={12}><ChartWrapper gender={this.state.gender} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
