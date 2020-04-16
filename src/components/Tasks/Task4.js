import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task4 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 4</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    В нижнесаксонской деревне Бимольтен на высоте
                    <Majax.Node inline formula="\ 98\ м" /> установлены
                    <Majax.Node inline formula="\ 14\ ВЭУ" />.<br />
                    Определите их мощность, если диаметр ветроколеса составляет
                    <Majax.Node inline formula="\ d = 10\ м" />.<br />
                    Известно, что на высоте <Majax.Node inline formula="10\ м\ " />
                    скорость ветра <Majax.Node inline formula="υ10 = 6,8\ м/с" />.<br />
                    КПД ветроустановки <Majax.Node inline formula="η = 0,2" />,
                    параметр соотнесения <Majax.Node inline formula="b = 0,14" />,
                    плотность воздуха <Majax.Node inline formula="1,2\ кг/м^3" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task4;