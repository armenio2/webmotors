import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Icons from '../../../assets//icons';
import CarTab from './tab/car';

const View = (props) => {
    const [form, changeForm] = useState(
        {
            mark: { data: props.markData },
            model: { data: props.modelData },
            version: { data: props.versionData },
            checkBoxNew: false,
            checkBoxUsed: false
        }
    );
    const [tabValue, changeTabValue] = useState('car');

    useEffect(() => {
        changeForm({
            ...form,
            model: { data: props.modelData }
        })
    }, [props.modelData])//update when modelData change

    useEffect(() => {
        changeForm({
            ...form,
            version: { data: props.versionData }
        })
    }, [props.versionData])//update when versionData change

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
                                        <Row>
                                            <Col sm={12}>
                                                <p style={styleLabel}>COMPRAR</p>
                                                <Row>
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
                                                <p style={styleLabel}>COMPRAR</p>
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
                            <Row style={{ float: 'right' }} >
                                <Col style={yellowButton} sm={12} align="center" >
                                    <p>Vender meu carro</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                {<CarTab form={form} changeForm={changeForm} storeState={props.storeState} />}
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

const styleLabel = {
    color: '#C4C4C4',
    fontSize: 12
}

const yellowButton = {
    color: '#F6A55E',
    border: '1px solid #F6A55E',
    fontWeight: 'bold',
    padding: '5px',
    marginBottom: '10px',
    cursor: 'pointer'
}

export default View;