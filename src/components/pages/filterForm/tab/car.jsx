import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Select from '../../../support/select';



const carTab = (props) => {
    return (
        <Row>
            <Col>
                <Container style={stylecontainerForm}>
                    <Row>
                        <Col sm={2}>
                            <input type="checkbox" id="scales" name="Novos"
                                checked={props.form.checkBoxNew}
                                onClick={() => props.changeForm({ ...props.form, checkBoxNew: !props.form.checkBoxNew })}
                            />
                            <label value="Novos">Novos</label>
                        </Col>
                        <Col sm={2}>
                            <input type="checkbox" id="scales" name="Usados"
                                checked={props.form.checkBoxUsed}
                                onClick={() => props.changeForm({ ...props.form, checkBoxUsed: !props.form.checkBoxUsed })}
                            />
                            <label value="Usados">Usados</label>
                        </Col>
                    </Row>
                    <Row style={styleRow}>
                        <Col sm={6} >
                            <Select data={false} placeholder={'Onde:'} />
                        </Col>
                        <Col sm={3}>
                            <Select data={props.form.mark.data} type='mark' placeholder={'Marca:'} />
                        </Col>
                        <Col sm={3}>
                            <Select data={props.form.model.data} type='model' placeholder={'Modelo:'} />
                        </Col>
                    </Row>
                    <Row style={styleRow}>
                        <Col sm={3}>
                            <Select data={false} placeholder={'Ano Desejado'} />
                        </Col>
                        <Col sm={3}>
                            <Select data={false} placeholder={'Faixa de Preço'} />
                        </Col>
                        <Col sm={6}>
                            <Select data={props.form.version.data} type='version' placeholder={'Versão'} />
                        </Col>
                    </Row>
                    <Row style={styleRow}>
                        <Col sm={8}>
                            <p>> Busca Avançada</p>
                        </Col>
                        <Col sm={2}>
                            <p style={{ color: '#C4C4C4', cursor: 'pointer' }}>Limpar filtros</p>
                        </Col>
                        <Col sm={2}>
                            <button
                                onClick={() => alert(`Pesquisando MarcaId: ${props.storeState.markSelectedID}   ModelID: ${props.storeState.modelSelectedID}  VersionId: ${props.storeState.versionSelectedID} `)}
                                style={{ background: '#D24A53', color: 'white', border: 'none', borderRadius: '5px', height: '50px', width: '100%', cursor: 'pointer' }}
                            >VER OFERTAS</button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row >
    )
};

const stylecontainerForm = {
    padding: '5px 10px 5px 10px',
    background: 'white',
    border: '1px solid',
    borderColor: '#F4F4F4'
}

const styleRow = {
    padding: '10px 0px 10px 0px'
}

export default carTab;