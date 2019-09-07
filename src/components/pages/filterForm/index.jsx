import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Icons from '../../../assets//icons';
import CarTab from './tab/car';

const FilterForm = (props) => {
    const [modelData, setModelData] = useState(false);
    const [tabValue, changeTabValue] = useState('car');

    return (
        <Container style={stylesContainer}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=7963" alt="webmotorLogo" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row nogutter align="end">
                    <Col sm={3}>
                        <Container onClick={() => changeTabValue('car')} style={tabValue === 'car' ? styleTabActive : styleTab}>
                            <Row align="end">
                                <Col sm={4}>
                                    <img src={tabValue === 'car' ? Icons.carSelected : Icons.carDefault} alt="car" style={{ width: '45px' }} />
                                </Col>
                                <Col sm={8}>
                                    <Container style={{ lineHeight: '1px' }}>
                                        <Row >
                                            <Col sm={12}>
                                                <p>COMPRAR</p>
                                                <Row >
                                                    <Col sm={12}>
                                                        <p>CARROS</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={3}>
                        <Container onClick={() => changeTabValue('bike')} style={tabValue === 'bike' ? styleTabActive : styleTab}>
                            <Row align="end">
                                <Col sm={4}>
                                    <img src={tabValue === 'bike' ? Icons.motoSelected : Icons.motoDefault} alt="car" style={{ width: '45px' }} />
                                </Col>
                                <Col sm={8}>
                                    <Container style={{ lineHeight: '1px' }}>
                                        <Row >
                                            <Col sm={12}>
                                                <p>COMPRAR</p>
                                                <Row >
                                                    <Col sm={12}>
                                                        <p>MOTOS</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <Container style={{ lineHeight: '1px' }}>
                            <Row align="right" style={{ float: 'right' }} >
                                <Col style={yellowButton} sm={12} align="center" >
                                    <p>Vender meu carro</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                {<CarTab data={props.data} modelData={modelData} />}
            </Container>
        </Container>
    );
}

const stylesContainer = {
    width: '933px',
    height: '312px',
    background: '#F4F4F4',
    padding: '5px',
    fontFamily: "Poppins, Sans-serif"
}

const styleTab = {
    borderBottom: '1px solid #C4C4C4',
    color: '#C4C4C4',
    cursor: 'pointer'
}

const styleTabActive = {
    borderBottom: '1px solid #D24A53',
    color: '#E8A4B1',
    cursor: 'pointer'
}

const yellowButton = {
    color: '#F6A55E',
    border: '1px solid #F6A55E',
    fontWeight: '15px',
    padding: '10px'
}

export default FilterForm;