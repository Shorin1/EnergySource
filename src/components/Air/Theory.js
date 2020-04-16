import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'
import Majax from 'react-mathjax'
import Img1 from './img/Img1.png'
import Img2 from './img/Img2.png'

const Theory = () => {
    const formulaStyle = {
        fontSize: "16pt"
    };

    const fracFormulaStyle = {
        fontSize: "18pt"
    };

    return (
        <Card className="mt-3">
            <CardHeader><h3>Энергия ветра</h3></CardHeader>
            <CardBody>
                <CardText>
                    Ветер представляет собой движение воздушных масс земной
                    атмосферы, вызванное перепадом температуры в атмосфере из-за
                    неравномерного ее нагрева солнцем. Устройства, обеспечивающие
                    преобразование энергии ветра в полезную механическую, электрическую или тепловую энергии, называются ветроэнергетическими установками (ВЭУ).
                </CardText>
                <CardText>
                    Наиболее эффективным способом утилизации энергии ветра
                    является использование ВЭУ для производства электроэнергии.
                </CardText>
                <CardText>
                    Основной элемент ВЭУ – ветроколесо. Вращение ветроколеса
                    при набегающем ветровом потоке обусловлено действием силы,
                    которую можно разложить на две составляющие (рис. 6.4):<br />
                    – силу лобового сопротивления Fc, направленную вдоль скорости набегающего потока;<br />
                    – подъемную силу Fп, направленную перпендикулярно скорости набегающего потока.<br />
                </CardText>
                <CardText className="text-center">
                    <img src={Img1} /><br />
                    Рис. 6.4. Силы, действующие<br />
                    на тело, обтекаемое потоком газа<br />
                </CardText>
                <CardText>
                    Ветроустановки классифицируются по двум основным признакам: геометрии ветроколеса и его положению относительно
                    направления ветра. Если ось вращения ветроколеса параллельна
                    воздушному потоку, то установка называется горизонтально-осевой, если перпендикулярна – вертикально-осевой (рис. 6.5).
                </CardText>
                <CardText className="text-center">
                    <img src={Img2} /><br />
                    Рис. 6.5. Ветроколесо с горизонтальной (а) и вертикальной (б) осью
                </CardText>
                <CardText>
                    Показателем работы ветроустановки является ее мощность:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="N=N_{вп}η" />, (6.9)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="N_{вп}" /> - мощность ветрового колеса, <Majax.Node inline formula="Вт" />;
                    <Majax.Node inline formula="\ η=ξ_{i}η_{a}η_{м}η_{пр}" /> -  КПД ветровой установки;
                    <Majax.Node inline formula="\ ξ_{i}" /> - коэффициент использования энергии ветра;
                    <Majax.Node inline formula="\ η_{a}" /> - коэффициент аэродинамических потерь в ветроколесе;
                    <Majax.Node inline formula="\ η_{м}" /> - коэффициент механических потерь;
                    <Majax.Node inline formula="\ η_{пр}" /> -  коэффициент потерь в системе преобразования энергии после редуктора.
                </CardText>
                <CardText>
                    Мощность ветрового потока определяется выражением
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="N_{вп}=\frac{1}{(2ρυ^3S)}=\frac{π}{(8ρυ^3d^2)}" />, (6.10)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="ρ" /> - плотность воздуха, <Majax.Node inline formula="кг/м^3" />;
                    <Majax.Node inline formula="\ v_{h}" /> -  скорость ветрового потока, <Majax.Node inline formula="м/с" />;
                    <Majax.Node inline formula="\ S" /> -  площадь, ометаемая ветроколесом, <Majax.Node inline formula="м^2" />;
                    <Majax.Node inline formula="\ d" /> -  диаметр ветроколеса, <Majax.Node inline formula="м" />.
                </CardText>
                <CardText>
                    Скорость ветра увеличивается с высотой над поверхностью Земли. Ветроколесо должно устанавливаться достаточно высоко над местными препятствиями, чтобы набегающий поток ветра был сильным,
                    однородным, с минимальными изменениями скорости и направления.
                    Для определения скорости на заданной высоте часто используют аппроксимационную формулу, в которую входит значение стандартной
                    скорости ветра для данной местности, измеренное на высоте 10 м:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="v_{h}=v_{10}(\frac{h}{10})^b" />, (6.11)
                </CardText>
                    где – <Majax.Node inline formula="v_{h}" /> – скорость ветра на определяемой высоте, <Majax.Node inline formula="м/с" />;
                    <Majax.Node inline formula="\ v_{10}" /> – стандартное значение скорости ветра для данной местности на высоте флюгера <Majax.Node inline formula="10м" />;
                    <Majax.Node inline formula="\ h" /> –  высота, на которой определяется скорость ветра,  <Majax.Node inline formula="с" />;
                    <Majax.Node inline formula="\ b" /> –  параметр соотнесения, зависящий от времени года и рельефа местности.
                    Для открытой местности значения параметра принимаются равными b = 1/7 = 0,14 [9], для холмистой, лесистой
                    или с большим количеством зданий параметр равен b = 0,3 – 0,6.
            </CardBody>
        </Card>
    );
}

export default Theory;