import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'
import RoomCard from '../room/RoomCard'

const HotelService = () => {
  return (
    <>
     <Container className='mb-2'>
            <Header title={"Our Services"}/>
            <Row>
                <h4 className='text-center'>
                    Services at <span className='hotel-color'>lakeSide - </span>Hotel
                    <span className='gap-2'>
                        <FaClock/>-24-Hour Front Desk</span>
                </h4>
            </Row>
            <hr/>
            <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaWifi/>WiFi
                            </Card.Title>
                            <Card.Text>Stay Connected with high-Speed internet access.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaUtensils/> Breakfast
                            </Card.Title>
                            <Card.Text>Start your day with a delicious breakfast buffet.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaTshirt/> Laundry
                            </Card.Title>
                            <Card.Text>Keep your cloths clean and fresh with our laundry service.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaCocktail/> Mini-bar
                            </Card.Title>
                            <Card.Text>Enjoy a refreshing drink or snack from our in-room min-bar.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaParking/> Parking
                            </Card.Title>
                            <Card.Text>Park your Car conveniently in our on-site parking lot.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className='hotel-color'>
                                <FaSnowflake/> Air Conditioning
                            </Card.Title>
                            <Card.Text>Stay Cool and Comfortable with our air conditioning system.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 
    </>
  )
}

export default HotelService
