import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task8 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 8</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Определить количество древесины, которое потребуется
                    для получения <Majax.Node inline formula="150"/> МДж тепла,
                    если КПД установки <Majax.Node inline formula="75\%" />.<br />
                    Теплота сгорания древесины <Majax.Node inline formula="9" /> МДж/кг.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task8;