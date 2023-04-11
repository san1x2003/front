import React from "react";
import { Navbar, Nav, FormControl, Form, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"



export default function Navibar ()  {

    return (
        <>
            <Navbar collapse0nSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" > Главная </Nav.Link>
                            <Nav.Link href="/products" > Товары </Nav.Link>
                            <Nav.Link href="/сontacts" > Контакты </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
