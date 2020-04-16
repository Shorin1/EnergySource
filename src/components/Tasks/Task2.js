import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task2 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 2</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Солнечная батарея состоит из 1000 фотоэлементов, мощность каждого <Majax.Node inline formula="N_{эл}=1,5" /> <Majax.Node inline formula="Вт" />, 
                    размер <Majax.Node inline formula="20×30" /> <Majax.Node inline formula="см" />.<br/>
                    Определить <Majax.Node inline formula="КПД" /> солнечной батареи, если 
                    плотность потока излучения <Majax.Node inline formula="E = 450" /> <Majax.Node inline formula="Вт/м^2" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task2;