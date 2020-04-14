import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, CardSubtitle, Input, Button, InputGroup, InputGroupAddon, CardFooter } from 'reactstrap'
import Majax from 'react-mathjax'

const Example1 = () => {
    // s
    const [s, setS] = useState(0);
    const changeS = (event) => isNaN(parseFloat(event.target.value)) ? setS(0) : setS(parseFloat(event.target.value));
    // t1
    const [t1, setT1] = useState(0);
    const changeT1 = (event) => isNaN(parseFloat(event.target.value)) ? setT1(0) : setT1(parseFloat(event.target.value));
    // t2
    const [t2, setT2] = useState(0);
    const changeT2 = (event) => isNaN(parseFloat(event.target.value)) ? setT2(0) : setT2(parseFloat(event.target.value));
    // e
    const [e, setE] = useState(0);
    const changeE = (event) => isNaN(parseFloat(event.target.value)) ? setE(0) : setE(parseFloat(event.target.value));
    // alpha
    const [alpha, setAlpha] = useState(0);
    const changeAlpha = (event) => isNaN(parseFloat(event.target.value)) ? setAlpha(0) : setAlpha(parseFloat(event.target.value));
    // tau
    const [tau, setTau] = useState(0);
    const changeTau = (event) => isNaN(parseFloat(event.target.value)) ? setTau(0) : setTau(parseFloat(event.target.value));
    // cp
    const [cp, setCp] = useState(0);
    const changeCp = (event) => isNaN(parseFloat(event.target.value)) ? setCp(0) : setCp(parseFloat(event.target.value));
    // v
    const [v, setV] = useState(0);
    const changeV = (event) => isNaN(parseFloat(event.target.value)) ? setV(0) : setV(parseFloat(event.target.value));
    // rho
    const [rho, setRho] = useState(0);
    const changeRho = (event) => isNaN(parseFloat(event.target.value)) ? setRho(0) : setRho(parseFloat(event.target.value));
    // result
    const [q, setQ] = useState("0");
    const [m, setM] = useState("0");
    const [volume, setVolume] = useState("0");

    const resolve = () => {
        let qRes = alpha * tau * s * e * v * 3600;
        isNaN(qRes) ? setQ("0") : setQ(qRes.toFixed(3));

        let mRes = qRes / (cp * (t2 - t1));
        isNaN(mRes) ? setM("0") : setM(mRes.toFixed(3));

        let volumeRes = mRes / rho;
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
                            <Majax.Node inline formula={"S"} /> от температуры
                            <Majax.Node inline formula={"t_{1}"} /> до
                            <Majax.Node inline formula={"t_{2}"} />. Плотность потока солнечного излучения
                            <Majax.Node inline formula={"E"} />. Коэффициент поглощения
                            <Majax.Node inline formula={"α"} />, пропускная способность
                            <Majax.Node inline formula={"τ"} />. Определить, какой объем воды можно нагреть в коллекторе за время
                            <Majax.Node inline formula={"v"} /> часов. Параметры воды
                            <Majax.Node inline formula={"c_{p}"} />,
                            <Majax.Node inline formula={"ρ"} />.
                        </CardText>
                <CardSubtitle><h4>Входные данные</h4></CardSubtitle>
                <Row className="mb-2">
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"S"} /> 
                                    <Majax.Node inline formula={"м^{2}"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeS} /> 
                            <Majax.Node inline formula={""} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"t_{1}"} />
                                    <Majax.Node inline formula={"°С"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeT1} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"t_{2}"} />
                                    <Majax.Node inline formula={"°С"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeT2} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"E"} /> 
                                    <Majax.Node inline formula={"Вт/м^{2}"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeE} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><Button disabled><Majax.Node inline formula={"α"} /></Button></InputGroupAddon>
                            <Input onChange={changeAlpha} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><Button disabled><Majax.Node inline formula={"τ"} /></Button></InputGroupAddon>
                            <Input onChange={changeTau} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"v"} /> 
                                    <Majax.Node inline formula={"час"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeV} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"c"} /> 
                                    <Majax.Node inline formula={"Дж/(кг*К)"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeCp} />
                        </InputGroup>
                    </Col>
                    <Col className="mt-2" sm={3}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button disabled>
                                    <Majax.Node inline formula={"ρ"} /> 
                                    <Majax.Node inline formula={"кг/м^{3}"} />
                                </Button>
                            </InputGroupAddon>
                            <Input onChange={changeRho} />
                        </InputGroup>
                    </Col>
                </Row>
                <CardSubtitle><h4>Решение</h4></CardSubtitle>
                <CardText>
                    Определим поток солнечного излучения, который
                            поглощается панелью приемника за <Majax.Node inline formula={"v"} /> часов, по формуле (6.2):
                        </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula={"Q"} /> =
                            <Majax.Node inline formula={"α"} /> *
                            <Majax.Node inline formula={"τ"} /> *
                            <Majax.Node inline formula={"S"} /> *
                            <Majax.Node inline formula={"E"} /> *
                            <Majax.Node inline formula={"v"} /> =
                            <span>{alpha}</span> *
                            <span>{tau}</span> *
                            <span>{s}</span> *
                            <span>{e}</span> *
                            <span>{v * 60 * 60}</span> =
                            <span>{q}</span>
                    <Majax.Node inline formula={"Дж"} />
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula={"m"} />  =
                            <Majax.Node inline formula={"Q"} /> /
                            (<Majax.Node inline formula={"C"} /> *
                            (<Majax.Node inline formula={"t_{в2}"} /> -
                            <Majax.Node inline formula={"t_{в1}"} />)) =
                            <span>{q}</span> /
                            (<span>{cp}</span> *
                            (<span>{t2}</span> -
                            <span>{t1}</span>)) =
                            <span>{m}</span>
                    <Majax.Node inline formula={"кг"} />
                </CardText>
                <CardText>
                    Объем воды равен
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula={"V"} />  =
                            <Majax.Node inline formula={"m"} /> /
                            <Majax.Node inline formula={"ρ"} /> =
                            <span>{m}</span> /
                            <span>{rho}</span> =
                            <span>{volume}</span>
                    <Majax.Node inline formula={"м^{3}"} />
                </CardText>
            </CardBody>
            <CardFooter>
                <Button onClick={resolve}>Расчитать</Button>
            </CardFooter>
        </Card>
    )
}

export default Example1;