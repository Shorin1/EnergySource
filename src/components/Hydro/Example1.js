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

    // v
    const [v, setV] = useState(0);
    const [vInpt, setVInpt] = useState(0);
    const changeV = (event) => isNaN(parseFloat(event.target.value)) ? setVInpt(0) : setVInpt(parseFloat(event.target.value));
    // h
    const [h, setH] = useState(0);
    const [hInpt, setHInpt] = useState(0);
    const changeH = (event) => isNaN(parseFloat(event.target.value)) ? setHInpt(0) : setHInpt(parseFloat(event.target.value));
    // np
    const [np, setNp] = useState(0);
    const [npInpt, setNpInpt] = useState(0)
    const changeNp = (event) => isNaN(parseFloat(event.target.value)) ? setNpInpt(0) : setNpInpt(parseFloat(event.target.value));
    // rho
    const [rho, setRho] = useState(0);

    const resolve = () => {
        setV(vInpt);
        setH(hInpt);
        setNp(npInpt);

        let rhoRes = (npInpt * 1000) / (1000 * 9.81 * vInpt * hInpt);
        isNaN(rhoRes) ? setRho("0") : setRho(rhoRes.toFixed(3));
    };

    return (
        <Card className="mt-3 mb-3">
            <CardHeader>
                <CardTitle><h3>Пример</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle><h4>Условие</h4></CardSubtitle>
                <CardText>
                    Рассчитать КПД гидроэлектростанции, если расход воды равен
                    <Majax.Node inline formula="\ V\ м/с" /> напор 
                    воды <Majax.Node inline formula="H\ м" />, а 
                    мощность станции <Majax.Node inline formula="N_{п}" />.
                </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                <Row>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="V,\ м^{3}/c" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeV} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="H,\ м" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeH} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="N_{п},\ кВт" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeNp} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                <CardText>
                    КПД гидроэлектростанции определим, используя формулу (6.14):
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula={`η=\\frac{N_{п}}{N}=\\frac{N_{п}}{ρgVH}=\\frac{${np * 1000}}{1000⋅9.81⋅${v}⋅${h}}=${rho}`} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Рассчитать</Button>
            </CardFooter>
        </Card>
    );
}

export default Example1;