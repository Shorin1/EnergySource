import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task1 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 1</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Какой поток солнечной энергии необходим для нагревания воздуха в помещении на <Majax.Node inline formula="10°С" /> выше температуры наружного
                    воздуха?<br/> Коэффициент поглощения <Majax.Node inline formula="α = 0,9" />, пропускная способность <Majax.Node inline formula="τ = 0,9" />.
                    Сопротивление теплопотерям <Majax.Node inline formula="R = 0,07 " /> <Majax.Node inline formula="(м^2·K)/Вт" />.<br/>
                    Крыша и стены дома теплоизолированы, все потери происходят через окна.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task1;