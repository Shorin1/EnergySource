import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task5 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 5</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    В населенном пункте, расположенном на острове в Северном море, проживают <Majax.Node inline formula="100" /> человек.<br />
                    На острове существуют проблемы с поставкой энергоресурсов.<br />
                    Определить число и мощность ветроустановок, которые cмогут обеспечить энергией данный населенный пункт,
                    если средняя скорость ветра <Majax.Node inline formula="υ = 8\ м/с" />.<br />
                    Структура энергопотребления следующая:<br />
                    освещение, бытовые приборы – <Majax.Node inline formula="3\ кВт" />;<br />
                    отопительные установки, электроплиты – <Majax.Node inline formula="35\ кВт" />;<br />
                    теплицы – <Majax.Node inline formula="7\ кВт" />;<br />
                    зарядка электромобилей – <Majax.Node inline formula="5\ кВт" />.<br />
                    Диаметр ветроколеса <Majax.Node inline formula="d = 10\ м" />.<br />
                    <Majax.Node inline formula="КПД" /> ветроустановки <Majax.Node inline formula="η = 0,3" />,
                    плотность воздуха <Majax.Node inline formula="ρ = 1,2\ кг/м^3" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task5;