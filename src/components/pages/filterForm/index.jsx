import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Icons from '../../../assets//icons';
import Select from '../../support/select';

const FilterForm = (props) => {
    const [modelData, setModelData] = useState(false);

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
                <Row nogutter>
                    <Col>
                        <Container style={stylecontainerForm}>
                            <Row>
                                <Col sm={2}>
                                    <input type="checkbox" id="scales" name="Novos"
                                        checked
                                        style={{ borderColor: 'red', color: 'green' }}
                                    />
                                    <label for="scales">Novos</label>
                                </Col>
                                <Col sm={2}>
                                    <input type="checkbox" id="scales" name="Usados"
                                        checked
                                        style={{ borderColor: 'red', color: 'green' }}
                                    />
                                    <label for="scales">Usados</label>
                                </Col>
                            </Row>
                            <Row style={{ padding: '10px' }}>
                                <Col sm={6} >
                                    <Select data={false} placeholder={'Onde:'} />
                                </Col>
                                <Col sm={3}>
                                    <Select data={props.data} placeholder={'Marca:'} />
                                </Col>
                                <Col sm={3}>
                                    <Select data={modelData} placeholder={'Modelo:'} />
                                </Col>
                            </Row>
                            <Row style={{ padding: '10px' }}>
                                <Col sm={3}>
                                    <Select data={false} placeholder={'Ano Desejado'} />
                                </Col>
                                <Col sm={3}>
                                    <Select data={false} placeholder={'Faixa de Preço'} />
                                </Col>
                                <Col sm={6}>
                                    <Select data={false} placeholder={'Versão'} />
                                </Col>
                            </Row>
                            <Row style={{ padding: '10px' }}>
                                <Col sm={8}>
                                    <p>> Busca Avançada</p>
                                </Col>
                                <Col sm={2}>
                                    <p style={{ color: '#C4C4C4' }}>Limpar filtros</p>
                                </Col>
                                <Col sm={2}>
                                    <button
                                        style={{ background: '#D24A53', color: 'white', border: 'none', borderRadius: '5px', height: '50px', width: '100%' }}
                                    >VER OFERTAS</button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
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

const stylecontainerForm = {
    padding: '5px 10px 5px 10px',
    background: 'white',
    border: '1px solid',
    borderColor: '#F4F4F4'
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