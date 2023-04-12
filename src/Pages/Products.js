import React from "react";
import { Link } from 'react-router-dom';
import { Container,Nav,Row,Col, Card, Button } from "react-bootstrap";

export const Products = () => {


        return (
                <>
                <h1>
                    Телефоны
                </h1>
               <Nav>
            
                    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}  >
                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src='https://www.whatmobile.com.pk/control/news/assets/14022023/4cb196c1d3aeeedc8234efbba61ec5dd.jpg' alt="Xiaomi" />
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
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img  variant="top" src='https://telecombyte.com/wp-content/uploads/2021/03/Xiaomi-Mi-10S-3.jpg' />
                                    <Card.Body>
                                        <Card.Title> Xiaomi 10s </Card.Title>
                                        <Card.Text>
                                        256Gb, ,белый
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img  variant="top" src='https://i.ytimg.com/vi/VBhu7aH12dA/maxresdefault.jpg' />
                                    <Card.Body>
                                        <Card.Title> Redmi not 12 pro+ </Card.Title>
                                        <Card.Text>
                                           128Gb,черный
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">               
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img  variant="top" src='https://i.ytimg.com/vi/4TCfCVMVCqM/maxresdefault.jpg' />
                                    <Card.Body>
                                        <Card.Title> Xiaomi 12 Ultra </Card.Title>   
                                        <Card.Text>
                                           512Gb,белый
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
            
               <h1>
                    Ноутбуки
                </h1>
                <Nav>
            
                    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}  >
                        <Row>
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src='https://catherineasquithgallery.com/uploads/posts/2021-02/1614390866_20-p-temnii-fon-na-noutbuke-26.jpg' alt="Ноут" />
                                    <Card.Body>
                                        <Card.Title> Asus Predator 300  </Card.Title>
                                        <Card.Text>
                                        Диагональ 15.6 дюймов
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                            
                                            Купить
                                           
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img  variant="top" src='https://pemmzchannel.com/wp-content/uploads/2022/08/HP-Spectre-x360-14-001.jpeg' />
                                    <Card.Body>
                                        <Card.Title> HP-Spectre </Card.Title>
                                        <Card.Text>
                                        Диагональ 17,5 дюймов
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '17rem' }}>
                                    <Card.Img  variant="top" src='https://imgs.sector.sk/files/novinky/2016-4-5-14-6-53/hp-predstavilo-najtensi-notebo-115275-5256616.jpg' />
                                    <Card.Body>
                                        <Card.Title> HP Ultimate Edition+ </Card.Title>
                                        <Card.Text>
                                        Диагональ 15.6 дюймов
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">               
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img  variant="top" src='https://i.pinimg.com/originals/36/4d/52/364d524f28e4ad8b66105e9556e2be85.jpg' />
                                    <Card.Body>
                                        <Card.Title> MacBook Pro </Card.Title>   
                                        <Card.Text>
                                        Диагональ 17,5 дюймов
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

               <h1>
                    Телевизоры
                </h1>
                <Nav>
            
                    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}  >
                        <Row>
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src='https://avatars.mds.yandex.net/get-mpic/5366523/img_id8560978644704498075.jpeg/orig' alt="Телик" />
                                    <Card.Body>
                                        <Card.Title> Econ EX-32HS019B  </Card.Title>
                                        <Card.Text>
                                        Диагональ 39 дюймов
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                            
                                            Купить
                                           
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img  variant="top" src='https://digital-discount.ru/wp-content/uploads/8/f/1/8f1147bef0a094914249b16fb8d29877.jpeg' />
                                    <Card.Body>
                                        <Card.Title> Samsung Neo 2 </Card.Title>
                                        <Card.Text>
                                        Диагональ 37 дюймов
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img  variant="top" src='https://www.cena-vykon.cz/wp-content/uploads/2019/12/LG-OLED-8K.jpg' />
                                    <Card.Body>
                                        <Card.Title> Novex NWX-75U011MSG </Card.Title>
                                        <Card.Text>
                                        Диагональ 32 дюйма
                                        </Card.Text>
                                        <Link to="/Form">
                                        <Button variant="primary">               
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '19rem' }}>
                                    <Card.Img  variant="top" src='https://bestofhighend.com/wp-content/uploads/2018/04/sony-bravia-xf70-series-4k-hdr-led-tv.jpg' />
                                    <Card.Body>
                                        <Card.Title> Misura t9 </Card.Title>   
                                        <Card.Text>
                                        Диагональ 34 дюйма
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
                       
               <h1>
                    Игровые приставки
                </h1>
                <Nav>
            
                    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}  >
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src='https://www.somagnews.com/wp-content/uploads/2020/04/5-18-e1587309172934.jpg' alt="PS" />
                                    <Card.Body>
                                        <Card.Title> Playstation 5  </Card.Title>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                            
                                            Купить
                                           
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '19rem' }}>
                                    <Card.Img  variant="top" src='https://assets.reedpopcdn.com/microsoft-formally-unveils-the-disc-less-xbox-one-s-all-digital-edition-out-in-may-1555449854453.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/microsoft-formally-unveils-the-disc-less-xbox-one-s-all-digital-edition-out-in-may-1555449854453.jpg' />
                                    <Card.Body>
                                        <Card.Title> Xbox one s </Card.Title>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '19rem' }}>
                                    <Card.Img  variant="top" src='https://images.cgames.de/images/gsgp/227/nintendo-switch-gp_6133261.jpg' />
                                    <Card.Body>
                                        <Card.Title> Nintendo Switch </Card.Title>
                                        <Link to="/Form">
                                        <Button variant="primary">
                                        Купить
                                        </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img  variant="top" src='https://uncrate.com/p/2021/07/steam-deck.jpg' />
                                    <Card.Body>
                                        <Card.Title> Steam Deck </Card.Title>
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


        


    

