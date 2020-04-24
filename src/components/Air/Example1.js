import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardText, CardSubtitle, InputGroup, InputGroupAddon, Button, Input, CardFooter, Alert, InputGroupText } from 'reactstrap'
import Majax from 'react-mathjax'

const Example1 = () => {
    const inputGroupStyle = {
        height: "41.4px"
    };

    const formulaStyle = {
        fontSize: "16pt"
    };

    const fractFormulaStyle = {
        fontSize: "18pt"
    };

    // r
    const [r, setR] = useState(0);
    const [rInpt, setRInpt] = useState(0);
    const changeR = (event) => isNaN(parseFloat(event.target.value)) ? setRInpt(0) : setRInpt(parseFloat(event.target.value));
    // v
    const [v, setV] = useState(0);
    const [vInpt, setVInpt] = useState(0);
    const changeV = (event) => isNaN(parseFloat(event.target.value)) ? setVInpt(0) : setVInpt(parseFloat(event.target.value));
    // eps
    const [eps, setEps] = useState(0);
    const [epsInpt, setEpsInpt] = useState(0);
    const changeEps = (event) => isNaN(parseFloat(event.target.value)) ? setEpsInpt(0) : setEpsInpt(parseFloat(event.target.value));
    // na
    const [na, setNa] = useState(0);
    const [naInpt, setNaInpt] = useState(0);
    const changeNa = (event) => isNaN(parseFloat(event.target.value)) ? setNaInpt(0) : setNaInpt(parseFloat(event.target.value));
    // nm
    const [nm, setNm] = useState(0);
    const [nmInpt, setNmInpt] = useState(0);
    const changeNm = (event) => isNaN(parseFloat(event.target.value)) ? setNmInpt(0) : setNmInpt(parseFloat(event.target.value));
    // npr
    const [npr, setNpr] = useState(0);
    const [nprInpt, setNprInpt] = useState(0);
    const changeNpr = (event) => isNaN(parseFloat(event.target.value)) ? setNprInpt(0) : setNprInpt(parseFloat(event.target.value));
    // rho
    const [rho, setRho] = useState(0);
    const [rhoInpt, setRhoInpt] = useState(0);
    const changeRho = (event) => isNaN(parseFloat(event.target.value)) ? setRhoInpt(0) : setRhoInpt(parseFloat(event.target.value));
    // n
    const [n, setN] = useState(0);

    const resolve = () => {
        setR(rInpt);
        setV(vInpt);
        setEps(epsInpt);
        setNa(naInpt);
        setNm(nmInpt);
        setNpr(nprInpt);
        setRho(rhoInpt);

        let nRes = 3.14 * rInpt * rInpt * ((rhoInpt * vInpt * vInpt * vInpt) / 2) * epsInpt * naInpt * nmInpt * nprInpt;
        setN(nRes.toFixed(2));
    };

    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h3>Пример 1</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Рассчитать мощность ветроустановки с радиусом ветроколеса
                    <Majax.Node inline formula="R" /> при скорости ветра
                    <Majax.Node inline formula="\ v" />. Коэффициенты
                    <Majax.Node inline formula="\ ξ" />; <Majax.Node inline formula="η_{a}" />;
                    <Majax.Node inline formula="\ η_{м}" />; <Majax.Node inline formula="η_{пр}" />.
                    Плотность воздуха <Majax.Node inline formula="ρ" />.
                </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Alert className="mt-3" color="info">Числа с запятой нужно вводить через точку</Alert>
                <Row>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="R,\ м" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeR} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="v,\ м/с" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeV} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="ξ" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeEps} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="η_{a}" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeNa} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula={"η_{м}"} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeNm} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="η_{пр}" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeNpr} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="ρ,\ кг/м^3" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeRho} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula={`N=S\\frac{pv^3}{2}η=3.14*${r}^2*\\frac{${rho}*${v}^3}{2}${eps}*${na}*${nm}*${npr}=${n}\\ Вт`} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Расчитать</Button>
            </CardFooter>
        </Card>
    );
};

export default Example1;