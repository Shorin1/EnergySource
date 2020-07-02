import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Row, Col, Card, CardTitle, CardBody, CardText, CardHeader,
    CardSubtitle, Alert, Input, Button, InputGroup,
    InputGroupAddon, CardFooter, InputGroupText
} from 'reactstrap'
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

    // s
    const [s, setS] = useState(0);
    const [sInpt, setSInpt] = useState(0);
    const changeS = (event) => isNaN(parseFloat(event.target.value)) ? setSInpt(0) : setSInpt(parseFloat(event.target.value));
    // t1
    const [t1, setT1] = useState(0);
    const [t1Inpt, setT1Inpt] = useState(0);
    const changeT1 = (event) => isNaN(parseFloat(event.target.value)) ? setT1Inpt(0) : setT1Inpt(parseFloat(event.target.value));
    // t2
    const [t2, setT2] = useState(0);
    const [t2Inpt, setT2Inpt] = useState(0);
    const changeT2 = (event) => isNaN(parseFloat(event.target.value)) ? setT2Inpt(0) : setT2Inpt(parseFloat(event.target.value));
    // e
    const [e, setE] = useState(0);
    const [eInpt, setEInpt] = useState(0);
    const changeE = (event) => isNaN(parseFloat(event.target.value)) ? setEInpt(0) : setEInpt(parseFloat(event.target.value));
    // alpha
    const [alpha, setAlpha] = useState(0);
    const [alphaInpt, setAlphaInpt] = useState(0);
    const changeAlpha = (event) => isNaN(parseFloat(event.target.value)) ? setAlphaInpt(0) : setAlphaInpt(parseFloat(event.target.value));
    // tau
    const [tau, setTau] = useState(0);
    const [tauInpt, setTauInpt] = useState(0);
    const changeTau = (event) => isNaN(parseFloat(event.target.value)) ? setTauInpt(0) : setTauInpt(parseFloat(event.target.value));
    // cp
    const [cp, setCp] = useState(0);
    const [cpInpt, setCpInpt] = useState(0);
    const changeCp = (event) => isNaN(parseFloat(event.target.value)) ? setCpInpt(0) : setCpInpt(parseFloat(event.target.value));
    // v
    const [v, setV] = useState(0);
    const [vInpt, setVInpt] = useState(0);
    const changeV = (event) => isNaN(parseFloat(event.target.value)) ? setVInpt(0) : setVInpt(parseFloat(event.target.value));
    // rho
    const [rho, setRho] = useState(0);
    const [rhoInpt, setRhoInpt] = useState(0);
    const changeRho = (event) => isNaN(parseFloat(event.target.value)) ? setRhoInpt(0) : setRhoInpt(parseFloat(event.target.value));
    // result
    const [q, setQ] = useState("0");
    const [m, setM] = useState("0");
    const [volume, setVolume] = useState("0");

    const resolve = () => {
        setS(sInpt);
        setT1(t1Inpt);
        setT2(t2Inpt);
        setE(eInpt);
        setAlpha(alphaInpt);
        setTau(tauInpt);
        setCp(cpInpt);
        setV(vInpt);
        setRho(rhoInpt);

        let qRes = alphaInpt * tauInpt * sInpt * eInpt * vInpt * 3600;
        isNaN(qRes) ? setQ("0") : setQ(qRes.toFixed(3));

        let mRes = qRes / (cpInpt * (t2Inpt - t1Inpt));
        isNaN(mRes) ? setM("0") : setM(mRes.toFixed(3));

        let volumeRes = mRes / rhoInpt;
        isNaN(volumeRes) ? setVolume("0") : setVolume(volumeRes.toFixed(3));
    };

    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h3>Пример 1</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle><h4>Условие</h4></CardSubtitle>
                <CardText>
                    Вода нагревается в солнечном коллекторе площадью
                        <Majax.Node inline formula="\ S" /> от температуры
                        <Majax.Node inline formula="\ t_{1}" /> до
                        <Majax.Node inline formula="\ t_{2}" />. Плотность потока солнечного излучения
                        <Majax.Node inline formula="\ E" />. Коэффициент поглощения
                        <Majax.Node inline formula="\ α" />, пропускная способность
                        <Majax.Node inline formula="\ τ" />. Определить, какой объем воды можно нагреть в коллекторе за время
                        <Majax.Node inline formula="\ v" /> часов. Параметры воды
                        <Majax.Node inline formula="\ c_{p}" />,
                        <Majax.Node inline formula="\ ρ" />.
                    </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Alert className="mt-3" color="info">Дробные значения нужно вводить через точку</Alert>
                <Row>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="S,\ м^{2}" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeS} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="t_{1},\ °С" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeT1} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="t_{2},\ °С" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeT2} />
                        </InputGroup>
                    </Col>
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
                                    <Majax.Node inline formula="α" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeAlpha} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="τ" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeTau} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="v,\ час" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeV} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="c,\ Дж/(кг*К)" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeCp} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Majax.Node inline formula="ρ,\ кг/м^{3}" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input style={inputGroupStyle} onChange={changeRho} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle className="mt-3"><h4>Решение</h4></CardSubtitle>
                <CardText>
                    Определим поток солнечного излучения, который
                    поглощается панелью приемника за <Majax.Node inline formula={"v"} /> часов,
                    по формуле (6.2):
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula={`Q=α*τ*S*E*v=${alpha}*${tau}*${s}*${e}*${v * 60 * 60}=${q}\\ Дж`} />
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula={`m = \\frac{Q}{C * (t_{в2} - t_{в1})}=\\frac{${q}}{${cp}(${t2}-${t1})}=${m}\\ кг`} />
                </CardText>
                <CardText>
                    Объем воды равен
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula={`V =\\frac{m}{ρ}=\\frac{${m}}{${rho}}=${volume}\\ м^3`} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Рассчитать</Button>
            </CardFooter>
        </Card>
    )
}

export default Example1;