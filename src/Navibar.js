import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"



export default function Navibar ()  {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className='me-auto mb-2 mb-lg-0' collapse0nSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/"> Sanshop</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" > Главная </Nav.Link>
                            <Nav.Link href="/products" > Товары </Nav.Link>
                            <Nav.Link href="/сontacts" > Контакты </Nav.Link>
                        </Nav>
                        <Nav>
                        
                        <Button onClick={handleShow}>
                            Войти</Button>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
