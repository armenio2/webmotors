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
                        <Container style={styleTabActive}>
                            <Row align="end">
                                <Col sm={4}>
                                    <img src={Icons.carSelected} alt="car" style={{ width: '45px' }} />
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
                        <Container style={styleTab}>
                            <Row align="end">
                                <Col sm={4}>
                                    <img src={Icons.motoDefault} alt="car" style={{ width: '45px' }} />
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
                    <Col sm={6} align="right">
                        <p>VENDER MEU CARRO</p>
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
    color: '#C4C4C4'
}

const styleTabActive = {
    borderBottom: '1px solid #D24A53',
    color: '#E8A4B1'
}

const styleCheckbox = {
    borderColor: '#D24A53'
}

const styleSelect = {
    color: 'red',
    background: 'green',
    borderColor: 'yellow'
}

export default FilterForm;


                    //https://www.webmotors.com.br/assets/img/webmotors.svg?t=7963 // icon

        // red strong color #D24A53


//https://www.npmjs.com/package/react-select