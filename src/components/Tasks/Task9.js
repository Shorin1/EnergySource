import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task9 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 9</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Определить теоретически необходимое количество воздуха для сгорания древесного топлива следующего состава, %:<br/>
                    <Majax.Node inline formula="\ C^p= 25" />, <Majax.Node inline formula="H^p = 5,1" />;
                    <Majax.Node inline formula="\ S^p = 0,2" />; <Majax.Node inline formula="O^p = 22" />;
                    <Majax.Node inline formula="\ N^p = 0,9" />; <Majax.Node inline formula="A^p = 1,8" />;
                    <Majax.Node inline formula="\ W^p = 45" />.<br />
                    Коэффициент избытка воздуха <Majax.Node inline formula="α = 1,2" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task9;