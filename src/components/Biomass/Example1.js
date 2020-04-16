import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardText, CardSubtitle, Alert, InputGroup, InputGroupAddon, Button, Input, CardFooter, InputGroupText } from 'reactstrap'
import Majax from 'react-mathjax'

const Example1 = () => {
    const inputGroupStyle = {
        height: "41px"
    };

    const formulaStyle = {
        fontSize: "16pt"
    };

    const fracFormulaStyle = {
        fontSize: "18pt"
    };

    const [m, setM] = useState(0);
    const [mInpt, setMInpt] = useState(0);
    const changeM = (event) => isNaN(parseFloat(event.target.value)) ? setMInpt(0) : setMInpt(parseFloat(event.target.value));

    const [n, setN] = useState(0);
    const [nInpt, setNInpt] = useState(0);
    const changeN = (event) => isNaN(parseFloat(event.target.value)) ? setNInpt(0) : setNInpt(parseFloat(event.target.value));

    const [qn, setQn] = useState(0);
    const [qnInpt, setQnInpt] = useState(0);
    const changeQn = (event) => isNaN(parseFloat(event.target.value)) ? setQnInpt(0) : setQnInpt(parseFloat(event.target.value));

    const [qd, setQd] = useState(0);
    const [qdInpt, setQdInpt] = useState(0);
    const changeQd = (event) => isNaN(parseFloat(event.target.value)) ? setQdInpt(0) : setQdInpt(parseFloat(event.target.value));

    const [eta, setEta] = useState(0);

    const resolve = () => {
        setM(mInpt);
        setN(nInpt);
        setQn(qnInpt);
        setQd(qdInpt);

        let etaRes = (nInpt * qnInpt) / (mInpt * qdInpt * Math.pow(10, 3));
        setEta(etaRes.toFixed(2));
    };

    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h3>Пример</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle><h4>Условие</h4></CardSubtitle>
                <CardText>
                    Каким должен быть КПД печи для сжигания 
                    <Majax.Node inline formula="m\ кг" /> дров при приготовлении 
                    пищи для <Majax.Node inline formula="n" /> человек?
                    Норма расхода тепла <Majax.Node inline formula="Q_{н}\ кДж" /> на одного человека.
                    Теплота сгорания дров <Majax.Node inline formula="Q_{д}\ МДж/кг" />.
                </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Alert className="mt-3" color="info">Числа с запятой нужно вводить через точку</Alert>
                <Row>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="m\ кг" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeM} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="n" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeN} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="Q_{н}\ кДж" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeQn} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="Q_{д}\ МДж/к" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeQd} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                <CardText>
                    КПД печи определим по формуле (6.19):
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula={`η=\\frac{Q_{пол}}{Q^{р}_{н}}=\\frac{${n}*${qn}}{${m}*${qd}*10^3}=${eta}`} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Расчитать</Button>
            </CardFooter>
        </Card>
    );
}

export default Example1;