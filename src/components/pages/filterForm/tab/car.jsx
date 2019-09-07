import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Select from '../../../support/select';

const carTab = (props) => {

    return (
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
                            <Select data={props.modelData} placeholder={'Modelo:'} />
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
                    <Row style={{ padding: '5px' }}>
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
    )
};

const stylecontainerForm = {
    padding: '5px 10px 5px 10px',
    background: 'white',
    border: '1px solid',
    borderColor: '#F4F4F4'
}

export default carTab;