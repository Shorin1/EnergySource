import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task6 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 6</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Турбина гидроэлектростанции имеет мощность <Majax.Node inline formula="N_{п} = 500\ МВт\ " />
                    и <Majax.Node inline formula="КПД\ 93\%" />.<br />
                    Определить расход воды для гидротурбины, если напор составляет <Majax.Node inline formula="H = 90\ м" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task6;