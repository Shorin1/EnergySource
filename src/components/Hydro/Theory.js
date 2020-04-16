import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'
import Majax from 'react-mathjax'
import Img1 from './img/Img1.png'

const Theory = () => {
    const formulaStyle = {
        fontSize: "16pt"
    };

    const fracFormulaStyle = {
        fontSize: "18pt"
    };

    return (
        <Card className="mt-3">
            <CardHeader><h3>Гидроэнергия</h3></CardHeader>
            <CardBody>
                <CardText>
                    Источником гидроэнергии является преобразованная энергия
                    Солнца в виде запасенной потенциальной энергии воды, которая
                    затем преобразуется в механическую работу и электроэнергию.
                    Преобразование потенциальной энергии воды в электрическую
                    энергию производится на гидроэлектростанции. Схема ГЭС представлена на рис. 6.6.
                </CardText>
                <CardText className="text-center">
                    <img src={Img1} /><br />
                    Рис. 6.6. Схема гидроэлектростанции:<br />
                    1 – водохранилище; 2 – турбина; 3 – генератор
                </CardText>
                <CardText>
                    Основным рабочим элементом ГЭС, непосредственно преобразующим энергию движущейся воды в кинетическую энергию
                    своего вращения, является гидротурбина. Гидротурбины бывают:
                </CardText>
                <CardText>
                    – активные, рабочее колесо которых вращается в воздухе под
                    действием струи воды;
                </CardText>
                <CardText>
                    – реактивные, рабочее колесо которых полностью погружено
                    в воду и вращается в основном за счет разницы давлений перед и
                    за колесом.
                </CardText>
                <CardText>
                    Основными параметрами, характеризующими работу турбин
                    в установившемся режиме, являются:
                    расход <Majax.Node inline formula="V" />,
                    напор <Majax.Node inline formula="H" />,
                    потребляемая <Majax.Node inline formula="N" />
                    и полезная <Majax.Node inline formula="N+{п}" /> мощности,
                    коэффициент полезного действия <Majax.Node inline formula="η" />.
                </CardText>
                <CardText>
                    Потребляемая мощность (мощность водного потока) равна
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="N=ρgVH" />, (6.12)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="ρ" /> – плотность воды, 
                    <Majax.Node inline formula="\ кг/м^3" />;
                    <Majax.Node inline formula="\ g" /> – ускорение свободного падения, 
                    <Majax.Node inline formula="\ м/с^2" />;
                    <Majax.Node inline formula="\ V" /> – объемный расход жидкости, 
                    <Majax.Node inline formula="\ м^3/c" />
                    <Majax.Node inline formula="\ H" /> – напор (высота падения жидкости), 
                    <Majax.Node inline formula="\ м" />.
                </CardText>
                <CardText>
                    <b><em>Полезная мощность</em></b> - это мощность, передаваемая на вал генератора. Определяется по формуле:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="N_{п}=ωМ_{кр}=2πnM_{кр}" />, (6.13)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="ω" /> – угловая скорость вращения, 
                    <Majax.Node inline formula="\ рад/с" />;
                    <Majax.Node inline formula="\ n" /> – частота вращения, 
                    <Majax.Node inline formula="\ мин^{-1}" />;
                    <Majax.Node inline formula="\ M_{кр}" /> – крутящий момент, 
                    <Majax.Node inline formula="\ Н·м" />.
                </CardText>
                <CardText>
                    Потребляемая мощность больше полезной мощности на величину потерь и может определяться через КПД турбины:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="{N}=\frac{N_{п}}{η}" />, (6.14)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="η" /> – КПД турбины.
                </CardText>
                <CardText>
                    Скорость потока вычисляется по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="u=\sqrt{2gH}" />. (6.15)
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Theory;