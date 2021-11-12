import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import hotels from './hotels';
import HotelCard from './Components/HotelCard';

function App() {
  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <Container>
      <Container>
        <Card style={{textAlign: 'center'}}>
          <Card.Header style={{textAlign: 'center'}}>Welcome To Your Dashboard</Card.Header>
        </Card>
        <Container style={{margin: '2%'}}>
          <Row>
            {hotels.map((hotel) => {
              return <Col><HotelCard hotel={hotel} options={options} /></Col>
            })}
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
