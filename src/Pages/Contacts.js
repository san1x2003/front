import React from "react";
import { Link } from 'react-router-dom';
import { Container,Nav,Row,Col, Card, Button } from "react-bootstrap";


export const Contacts = () => {
    
        
    
        return (
                <>
             <h1>
              Телефоны
             </h1>
             <Nav>
    
    <Container style={{ paddingTop: '20rem', paddingBottom: '30rem' }}  >
        <Row>
            <Col>
                <Card style={{ width: '200rem' }}>
                    <Card.Img variant="top" src='https://bagra.ru/logos/2811729oriflame_kosmeticheskaya_kompaniya.png' alt="Xiaomi" />
                    <Card.Body>
                        <Card.Title> Xiaomi 13 lite </Card.Title>
                        <Card.Text>
                        256Gb, черный
                        </Card.Text>
                        <Link to="/Form">
                        <Button variant="primary">
                            
                            Купить
                           
                        </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
</Nav>
                </>
            
                )
        }
            
            
export default Contacts;