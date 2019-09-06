import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Checkbox from 'rc-checkbox';
import Icons from '../../../assets//icons';
import Select from 'react-select';

const options = [
    { value: 'marca', label: 'marca' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function FilterForm() {
    return (
        <Container style={stylesContainer}>
            <Container style={{ lineHeight: '10px' }}>
                <Row>
                    <Col sm={12}>
                        <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=7963" alt="webmotorLogo" />
                    </Col>
                </Row>
            </Container>
            <Container style={{ lineHeight: '10px' }}>
                <Row nogutter align="end">
                    <Col sm={3}>
                        <Container style={styleTabActive}>
                            <Row nogutter align="end">
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
                                    <label>
                                        <Checkbox
                                            //style={styleCheckbox}
                                            borderColor='#D24A53'
                                            checked
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                        />
                                        &nbsp; Novos
                                         </label>
                                </Col>
                                <Col sm={2}>
                                    <input type="checkbox" id="scales" name="Usados"
                                        checked
                                        style={{ borderColor: 'red', color: 'green' }}
                                    />
                                    <label for="scales">Usados</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <p>input local + raio</p>
                                </Col>
                                <Col sm={3}>
                                    <Select
                                        className='styledFoo'
                                        //style={styleSelect}
                                        //value={selectedOption}
                                        //onChange={this.handleChange}
                                        options={options}
                                    />
                                    <p>input marca</p>
                                </Col>
                                <Col sm={3}>
                                    <p>input modelos</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <p>input ano desejado</p>
                                </Col>
                                <Col sm={3}>
                                    <p>input faixa de preço</p>
                                </Col>
                                <Col sm={6}>
                                    <p>input versão</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <p>busca avançada</p>
                                </Col>
                                <Col sm={2}>
                                    <p>botão limpar filtros</p>
                                </Col>
                                <Col sm={4}>
                                    <p>bottão ver offertas</p>
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
    padding: '5px'
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