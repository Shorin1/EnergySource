import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap'
import Majax from 'react-mathjax'

import Pictures1 from './img/Pictures1.png'
import Pictures2 from './img/Pictures2.png'
import Pictures3 from './img/Pictures3.png'

const Theory = () => {
    const formulaStyle = {
        fontSize: "16pt"
    };

    const fracFormulaStyle = {
        fontSize: "18pt"
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle><h3>Солнечная энергия</h3></CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    Энергия Солнца является одним из главных ВИЭ. Она широко
                    используется для нагрева различных теплоносителей (горячее водоснабжение, отопление, сушка, термохимические холодильные
                    установки и др.) и производства электроэнергии (фотоэлектрические преобразователи и солнечные энергоустановки
                    с термодинамическим преобразованием энергии).
                </CardText>
                <CardText>
                    Преобразование солнечной энергии в тепловую обеспечивается системами солнечного отопления, основным компонентом которых служит коллектор.
                    Он предназначен для улавливания солнечной радиации и преобразования ее в тепловую энергию. Системы солнечного отопления подразделяются на пассивные и активные (рис. 6.1).
                </CardText>
                <CardText>
                    В пассивных системах отопления солнечное излучение воспринимается самим зданием или его отдельными архитектурными элементами.
                    В активных системах отопления солнечный коллектор является самостоятельным отдельным устройством и включает контур циркуляции теплоносителя.
                </CardText>
                <CardText className="text-center">
                    <img src={Pictures1} /><br />
                    Рис. 6.1. Системы пассивного (а) и активного (б) солнечного отопления:<br />
                    1 – стекло; 2 – аккумулирующая стена; 3 – заслонка; 4 – здание;<br />
                    5 – коллектор; 6 – накопительный резервуар; 7 – насос<br />
                </CardText>
                <CardText>
                    Для получения более высоких температур чем те, которые
                    можно получить с помощью плоских коллекторов, используются
                    концентрирующие коллекторы (рис. 6.2).
                </CardText>
                <CardText className="text-center">
                    <img src={Pictures2} /><br />
                    Рис. 6.2. Концентрирующий коллектор:<br />
                    1 – концентратор; 2 – приемник
                </CardText>
                <CardText>
                    Концентрирующий коллектор включает в себя приемник, поглощающий излучение и преобразующий его в какой-либо другой
                    вид энергии, и концентратор, который является оптической системой, собирающей солнечное
                    излучение с большой поверхности и направляющей его на приемник.
                    Концентратор представляет собой параболическое вогнутое зеркало, выполненное из полированного металла.
                    Также могут использоваться линзы, которые концентрируют проходящее через них излучение.
                </CardText>
                <CardText>
                    В отличие от плоских нагревателей концентраторы в основном поглощают прямое солнечное излучение.
                    Для обеспечения высокой эффективности процесса улавливания и преобразования
                    солнечной радиации концентрирующий коллектор снабжают системой слежения за Солнцем.
                </CardText>
                <CardText>
                    Суммарный тепловой поток, поступающий к теплоносителю,
                    определяется энергетическим балансом:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="{Q}={Q}_{погл} - {Q}_{пот}" />, (6.1)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="{Q}_{погл}" /> – поток излучения, поглощаемый приемником;
                    <Majax.Node inline formula="\ {Q}_{пот}" /> – тепловые потери приемника.
                </CardText>
                <CardText>
                    Поток солнечного излучения, поглощаемого панелью приемника, пропорционален плотности солнечного потока и площади
                    приемной поверхности:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="{Q}_{погл}={τ}_{пок}{α}_{п}{S}_{п}{E}" />, (6.2)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="{τ}_{пок}" /> – коэффициент пропускания прозрачного покрытия, защищающего приемную поверхность
                    (<Majax.Node inline formula="\ {τ}_{пок}" /> = 0,8–0,9);
                    <Majax.Node inline formula="\ {α}_{п}" /> – коэффициент поглощения приемной поверхности;
                    <Majax.Node inline formula="\ {S}_{п}" /> – площадь освещенной поверхности,
                    <Majax.Node inline formula="\ {α}^{п}" />;
                    <Majax.Node inline formula="\ E" /> – плотность солнечного потока,
                    <Majax.Node inline formula="\ {Вт}/{м}^{2}" />.
                </CardText>
                <CardText>
                    В процессе поглощения температура приемной поверхности повышается. Превышение температуры поглощающей панели
                    <Majax.Node inline formula="\ t_{п}" /> над температурой окружающей среды
                    <Majax.Node inline formula="\ {t}_{ос}" /> приводит к потере тепла от приемника:
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="{Q}_{пот}={k}_{пот}({t}_{п}-{t}_{ос}){S}_{п}" />, (6.3)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="{k}_{пот}" /> – коэффициент тепловых потерь, <Majax.Node inline formula="{Вт}/({м}^{2}*{K})" />.
                    Коэффициент тепловых потерь находится из равенства
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="k_{пот}=\frac{1}{R}=\frac{1}{α_{возд}}+\frac{δ_{ст}}{λ_{ст}}+\frac{1}{α_{ос}}" />, (6.4)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="R" /> – термическое сопротивление поверхности приемника,
                    зависящее от его теплоизоляции и от покрытия, <Majax.Node inline formula="Вт/(м^2*K)" />;
                    <Majax.Node inline formula="\ a_{возд}" /> – коэффициент теплоотдачи от поглощающей
                    к лучепрозрачной поверхности, <Majax.Node inline formula="Вт/(м^2*K)" />;
                    <Majax.Node inline formula="\ a_{oc}" /> – коэффициент теплоотдачи от лучепрозрачной
                    поверхности к окружающей среде, <Majax.Node inline formula="Вт/(м^2*K)" />;
                </CardText>
                <CardText>
                    <Majax.Node inline formula="δ_{ст}" /> – толщина лучепрозрачной
                    поверхности, <Majax.Node inline formula="m" />;
                    <Majax.Node inline formula="\ λ_{ст}" /> – теплопроводность лучепрозрачной поверхности, <Majax.Node inline formula="Вт/(м*K)" />.
                    Количество тепла, требуемого для нагрева жидкости, оценивается согласно выражению
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="Q_{ж}=mc(t_{в2}-t_{в1})" />, (6.5)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="m" /> – масса теплоносителя, <Majax.Node inline formula="кг" />;
                    <Majax.Node inline formula="\ c" /> – теплоемкость теплоносителя, <Majax.Node inline formula="Дж/(кг*К)" />;
                    <Majax.Node inline formula="\ t_{в2}" /> <Majax.Node inline formula="t_{в1}" /> –
                    конечная и начальная температуры теплоносителя, <Majax.Node inline formula="°С" />.
                </CardText>
                <CardText>
                    КПД коллектора определяется по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="η=\frac{Q}{S_{п}E}=η_{0}-k_{пот}\frac{t_{п}-t_{ос}}{E}" />, (6.6)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula={"η_{0}"} /> – оптический КПД коллектора.
                </CardText>
                <CardText>
                    Преобразование энергии Солнца в электрическую энергию возможно реализовать двумя способами:<br />
                    1) термодинамическим, при котором солнечная энергия передается теплоносителю с генерацией пара,
                    далее расширяющемуся в турбоагрегатах согласно типичной для ТЭС схеме;<br />
                    2) фотоэлектрическим, в котором преобразование протекает прямо, без промежуточных этапов.
                </CardText>
                <CardText>
                    Для прямого преобразования энергии солнечного излучения в
                    электроэнергию используются фотоэлементы, изготовленные из
                    полупроводниковых материалов, например кремния (рис. 6.3, а).
                    В основе действия фотоэлементов лежит явление возникновения
                    электрического тока при попадании излучения на пластину, состоящую из двух полупроводников с различными электрическими
                    свойствами, находящимися в контакте друг с другом.
                </CardText>
                <CardText className="text-center">
                    <img src={Pictures3} /><br />
                Рис. 6.3. Фотопреобразователи:<br />
                а – фотоэлемент; б – солнечный модуль; в – солнечная батарея<br />
                </CardText>
                <CardText>
                    Фотоэлементы последовательно соединяют в солнечные модули (рис. 6.3, б), а те, в свою очередь, параллельно соединяются
                    друг с другом в батареи (рис. 6.3, в). Таким образом, можно строить крупные фотоэлектрические станции.
                </CardText>
                <CardText>
                    Мощность солнечной батареи определяется по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula={"N=ηSE"} />, (6.7)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="η" /> – КПД солнечной батареи, <Majax.Node inline formula="Вт" />;
                    <Majax.Node inline formula="\ S" /> – площадь солнечной батареи, <Majax.Node inline formula="м^{2}" />;
                    <Majax.Node inline formula="\ E" /> – плотность потока солнечного излучения, <Majax.Node inline formula="Вт/м^{2}" />.
                </CardText>
                <CardText>
                    ЭДС солнечной батареи определяется выражением
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="ЭДС=\frac{N}{iS}" />, (6.8)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="i" /> – плотность тока, <Majax.Node inline formula="А/см^{2}" />
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Theory;