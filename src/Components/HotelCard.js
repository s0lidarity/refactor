import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HotelCard = ( { hotel, options } ) => {
    const GREETING = `Welcome to the lovely ${hotel.name}!`
    const [hotelColor, setHotelColor] = useState('text-primary');

    return (
       <Card style={{textAlign: 'center'}}>
           <Card.Header>
               <Container>
                   <Row><Col>{hotel.name}</Col></Row>
                    <Row>
                        <Col>
                            <Button 
                                size='sm' 
                                variant='primary' 
                                onClick={() =>{setHotelColor('text-primary')}}
                            >
                                Primary Color
                            </Button>
                        </Col>
                        <Col>
                            <Button 
                                size='sm' 
                                variant='secondary'                    
                                onClick={() =>{setHotelColor('text-secondary')}}
                            >
                                Secondary Color
                            </Button>
                        </Col>
                    </Row>
                </Container>
           </Card.Header>
           <Card.Body>
               <Card.Title style={{color: hotelColor}}>
                   <p className={hotelColor}>{GREETING}</p>
               </Card.Title>
               <HighchartsReact 
                highcharts={Highcharts}
                options={options}
               />
           </Card.Body>
       </Card>
    );
};

export default HotelCard;
