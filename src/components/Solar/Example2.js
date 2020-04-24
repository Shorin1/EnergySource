import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, CardSubtitle, Alert, Input, Button, InputGroup, InputGroupAddon, CardFooter, InputGroupText } from 'reactstrap'
import Majax from 'react-mathjax'

const Example2 = () => {
    const inputGroupStyle = {
        height: "41px"
    };

    const formulaStyle = {
        fontSize: "16pt"
    };

    const fracFormulaStyle = {
        fontSize: "18pt"
    };

    // e
    const [e, setE] = useState(0);
    const [eInpt, setEInpt] = useState(0);
    const changeE = (event) => isNaN(parseFloat(event.target.value)) ? setEInpt(0) : setEInpt(parseFloat(event.target.value));
    // n
    const [n, setN] = useState(0);
    const [nInpt, setNInpt] = useState(0);
    const changeN = (event) => isNaN(parseFloat(event.target.value)) ? setNInpt(0) : setNInpt(event.target.value);
    // rho
    const [eta, setEta] = useState(0);
    const [etaInpt, etaTauInpt] = useState(0);
    const changeTau = (event) => isNaN(parseFloat(event.target.value)) ? etaTauInpt(0) : etaTauInpt(event.target.value);
    // s
    const [s, setS] = useState(0);

    const resolve = () => {
        setE(eInpt);
        setN(nInpt);
        setEta(etaInpt / 100);

        let sRes = nInpt / (etaInpt / 100 * eInpt);
        isNaN(sRes) ? setS("0") : setS(sRes.toFixed(3));
    };

    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h3>Пример 2</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle><h4>Условие</h4></CardSubtitle>
                <CardText>
                    Плотность потом излучения, падающего на поверхность солнечной батареи, составляет
                    <Majax.Node inline formula="\ E" />. Какую площадь
                    <Majax.Node inline formula="\ S" /> должна иметь солнечная батарея мощностью
                    <Majax.Node inline formula="\ N" />
                    <Majax.Node inline formula="\ Вт" />, если ее КПД составляет
                    <Majax.Node inline formula="\ η" />.
                </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Alert className="mt-3" color="info">Числа с запятой нужно вводить через точку</Alert>
                <Row>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="E,\ Вт/м^{2}" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeE} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="N,\ Вт" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeN} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="η,\ \%" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeTau} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                <CardText>
                    Площадь батареи определим из формулы
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula={`S=\\frac{N}{η*E}=\\frac{${n}}{${eta} * ${e}}=${s}\\ м^2`} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Расчитать</Button>
            </CardFooter>
        </Card>
    );
}

export default Example2;