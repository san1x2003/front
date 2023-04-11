import React, {Component} from "react";
import CarouselBox from '../Components/CarouselBox';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Container,Tab,Nav,Row,Col, Card, Button } from "react-bootstrap";



export const Home = () => {


    return (
    <>
   <Nav>
     <CarouselBox/>

        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}  >
            <Row>
                <Col>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src='https://akket.com/wp-content/uploads/2020/11/Sony-PlayStation-5-Pro-0.jpg' alt="Ps5" />
                        <Card.Body>
                            <Card.Title> Розыгрыш Sony PlayStation 5 </Card.Title>
                            <Card.Text>
                               Чтобы учавствовать вступите в группу VK
                            </Card.Text>
                            <Link to="https://vk.com/public219879108">
                            <Button variant="primary">
                                
                                Вступить в группу
                               
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img  variant="top" src='https://i.pinimg.com/originals/8e/dd/2e/8edd2eff91c45f05c1d1ee47b9d2f836.jpg' />
                        <Card.Body>
                            <Card.Title> Новинки и Акции </Card.Title>
                            <Card.Text>
                                Заходите в нашу группу в VK и узнайвайте раньше всех о новых товарах и акциях!!!
                            </Card.Text>
                            <Link to="https://vk.com/public219879108">
                            <Button variant="primary">
                                Вступить в группу
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '23rem' }}>
                        <Card.Img  variant="top" src='https://i.ytimg.com/vi/Kacu1YFHYSI/maxresdefault.jpg' />
                        <Card.Body>
                            <Card.Title> Предзаказ нового Iphone 15 pro </Card.Title>
                            <Card.Text>
                               Заполни заявку и получи Iphone 15 pro быстрее всех!
                            </Card.Text>
                            <Link to="/Form">
                            <Button variant="primary">               
                                Сделать предзаказ
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container style={{ marginBottom: '100px' }}>

            <Row>
                <Col mr={7}>
                    <img src='https://www.trinova.ru/image/46f86faa6bbf9ac94a7e459509a20ed0/f/325RA58M0e3bO0.jpg' height={400} />
                </Col>
                <Col mr={7}>

                    <div>
                    Наша цель изменить жизнь людей, сделав простым доступ к огромному количеству качественных и недорогих товаров, предоставляя лучший сервис.
                    Наши клиенты – в центре всего, что мы делаем. Доверие - главное. Мы строим долгосрочные отношения. Во всём, чем занимаемся, стремимся быть экспертами.
                    Открыты для предложений и улучшений. Прозрачность - основа совместного бизнеса. Работаем, соблюдая этику бизнеса. Уважаем другие мнения и интересы.
                    Выполняем обязательства и берем ответственность за свои решения. Нетерпимы к коррупции. Sanshop - территория личной и коллективной самореализации.
                    Мы - одна команда. Уважаем мнение и интересы людей. Ценим свободу, смелость и ответственность.

                    </div>

                </Col>
            </Row>
        </Container>
   </Nav>

     
           
    </>

    )

}
       
   



