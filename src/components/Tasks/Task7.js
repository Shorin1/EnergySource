import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task7 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 7</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Высота падения воды на Нурекской ГЭС равна <Majax.Node inline formula="H = 275\ м" />.<br />
                    Через одну турбину ГЭС проходит <Majax.Node inline formula="V = 155\ м^3/с" /> воды.<br />
                    Определить скорость потока воды и мощность турбины.<br />
                    Чему равен <Majax.Node inline formula="КПД" /> турбины, 
                    если ее электрическая мощность равна <Majax.Node inline formula="N = 300\ МВт" />?
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task7;