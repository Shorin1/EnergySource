import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task3 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 3</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Определить <Majax.Node inline formula="ЭДС" /> солнечной батареи,
                    если плотность тока <Majax.Node inline formula="i = 4 · 10–3" />, <Majax.Node inline formula="А/см^2" />.<br/>
                    Плотность потока излучения <Majax.Node inline formula="E = 500" /> <Majax.Node inline formula="Вт/м^2" />, 
                    <Majax.Node inline formula="КПД" /> батареи <Majax.Node inline formula="η = 26\%" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task3;