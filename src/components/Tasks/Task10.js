import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

const Task10 = () => {
    return (
        <Card className="mt-3">
            <CardHeader>
                <CardTitle><h4>Задача 10</h4></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Определить объем биогазогенератора и суточный выход
                    биогаза, получаемого из отходов жизнедеятельности <Majax.Node inline formula="18" /> животных,
                    а также обеспечиваемую тепловую мощность.<br />
                    Время пребывания в биогазогенераторе
                    – <Majax.Node inline formula="14\ сут" /> при 
                    температуре <Majax.Node inline formula="25°С" />.<br />
                    Подача сухого сбраживаемого материала от одного животного идет со
                    скоростью <Majax.Node inline formula="2\ кг/сут" />.<br />
                    Выход биогаза из сухой массы <Majax.Node inline formula="с = 0,24\ м^3/кг" />.<br />
                    Содержание метана в биогазе составляет <Majax.Node inline formula="fм = 0,7" />,
                    КПД горелочного устройства <Majax.Node inline formula="η = 0,68" />.
                    Плотность сухого материала <Majax.Node inline formula="ρ = 50\ кг/м^3" />.
                    Теплота сгорания метана при нормальных физических условиях <Majax.Node inline formula="Q^{р}_{н} = 35,8\ МДж/м^3" />.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Task10;