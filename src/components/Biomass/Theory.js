import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'
import Majax from 'react-mathjax'

const Theory = () => {
    const formulaStyle = {
        fontSize: "14pt"
    };

    const fracFormulaStyle = {
        fontSize: "20pt"
    };

    return (
        <Card className="mt-3">
            <CardHeader><h3>Энергия биомассы</h3></CardHeader>
            <CardBody>
                <CardText>
                    Биомассой принято называть сложный комплекс веществ, из
                    которых состоят растения и животные. Основа биомассы – органические соединения углерода, которые в процессе взаимодействия
                    с кислородом при сгорании или в результате естественного метаболизма выделяют теплоту.
                </CardText>
                <CardText>
                    Источниками биомассы являются древесная биомасса (деревья, продукты их переработки), отходы сельского хозяйства (солома, ботва, навоз, помет),
                    промышленные и бытовые отходы (мусор), специально выращиваемые энергетические растения.
                </CardText>
                <CardText>
                    Существуют следующие способы переработки биомассы:
                </CardText>
                <CardText>
                    – термохимические (прямое сжигание, пиролиз, газификация,
                    гидрогенизация);
                </CardText>
                <CardText>
                    – биохимические (спиртовая ферментация, анаэробная переработка);
                </CardText>
                <CardText>
                    – агрохимические (экстракция).
                </CardText>
                <CardText>
                    Рассмотрим более подробно термохимические и биохимические способы переработки биомассы.
                </CardText>
                <CardText>
                    При прямом сжигании связанная в биомассе химическая энергия в процессе окисления непосредственно превращается в тепло.
                    Данный способ является наиболее простым и хорошо изученным.
                    Выбор способа сжигания зависит от влажности и состава биомассы. Прямое сжигание осуществляется в топках котлов и печей.
                    Полученное тепло используется для подогрева воды, отопления,
                    технологических нужд или производства электроэнергии.
                </CardText>
                <CardText>
                    Элементарный состав горючей массы древесины различных
                    пород примерно одинаков и содержит следующие массовые доли:
                    <Majax.Node inline formula="{C}^{г}=50,9\%" />; <Majax.Node inline formula="{H}^{г}=41,9\%" />;
                    <Majax.Node inline formula="{O}^{г}=0,8\%" />; <Majax.Node inline formula="{S}^{г}=0,3\%" />; [10].
                    Низшая теплота сгорания древесины сильно зависит от ее влажности
                    и приближенно определяется по формуле Менделеева (1.7):
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="{Q}^{р}_{н}=189⋅(100-A^p-1,13W^p)" />. (6.16)
                </CardText>
                <CardText>
                    Высшая теплота сгорания стволовой древесины практически
                    не зависит от вида древесины и примерно равна 9 МДж/кг.
                </CardText>
                <CardText>
                    Теоретическое количество воздуха, необходимое для сжигания 1 кг топлива, можно определить по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={formulaStyle} inline formula="V^o=0,0889C^p+0,265H^p+0,033(S^p-O^p)" />, (6.17)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="V^o" /> – теоретический объемный расход воздуха, <Majax.Node inline formula="м^3/кг" />.
                </CardText>
                <CardText>
                    Сгорание является полным, если все горючие компоненты топлива полностью прореагировали с кислородом. Для обеспечения
                    полного сгорания воздуха обычно подводят больше, чем теоретически необходимо. Отношение действительно поданного воздуха
                    к теоретически необходимому называется <b><em>коэффициентом избытка воздуха:</em></b>
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="α=\frac{V}{V^o}" />, (6.18)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="V" /> – действительный объемный расход воздуха, <Majax.Node inline formula="м^3/кг" />.
                </CardText>
                <CardText>
                    Для древесного топлива требуемый коэффициент избытка
                    воздуха составляет от 1,25–1,40 [10].
                </CardText>
                <CardText>
                    КПД топки определяется по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node style={fracFormulaStyle} inline formula="η_{т}=\frac{Q_{пол}}{Q^{р}_{н}}" />, (6.19)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="Q_{пол}" /> – полезно используемое тепло;
                    <Majax.Node inline formula="\ Q^{р}_{н}" /> - низшая теплота сгорания.
                </CardText>
                <CardText>
                    <b><em>Пиролиз</em></b> – процесс нагревания биомассы без доступа 
                    кислорода или при недостаточном
                    его доступе для получения производных топлив. Продуктами пиролиза 
                    являются газы, жидкий конденсат в виде смол и масел, 
                    твердые остатки в виде угля и золы.
                </CardText>
                <CardText>
                    Пиролиз может проводиться в присутствии малого количества
                    кислорода, тогда процесс называется <b><em>газификацией</em></b>. Газификация
                    осуществляется в специальном устройстве – газогенераторе и включает 
                    последовательные фазы: сушку, пиролиз и газификацию топлива.
                </CardText>
                <CardText>
                    Для осуществления процесса газификации древесины необходимо поддерживать равновесную температуру порядка 900°С, а
                    для получения угля в результате пиролиза – температуру 600–
                    700°С [11].
                </CardText>
                <CardText>
                    <b><em>Анаэробное сбраживание</em>></b> – процесс брожения биомассы при
                    недостатке кислорода и света под воздействием различных групп
                    бактерий с образованием биогаза, который состоит из метана
                    (55–70%) и углекислого газа (25–35%).
                </CardText>
                <CardText>
                    Объем биогаза, получаемого в биогазогенераторе, определяется по формуле
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula="V_{б}=cm_{0}" />, (6.20)
                </CardText>
                <CardText>
                    где <Majax.Node inline formula="с" /> – выход биогаза из сухой массы, 
                    <Majax.Node inline formula="\ v^3" />;
                    <Majax.Node inline formula="\ m_{0}" /> – масса сухого сбраживаемого материала, 
                    получаемого из всех источников.
                </CardText>
                <CardText>
                    Объем жидкой массы, заполняющей биогазогенератор, определяется выражением
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula="V_{ж}=\frac{m_{0}}{ρ}" />, (6.21)
                </CardText>
                <CardText>
                    где  <Majax.Node inline formula="ρ" /> – 
                    плотность сухого материала.
                </CardText>
                <CardText>
                    Объем биогазогенератора равен
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula="V_{г}=V_{ж}τ" />, (6.22)
                </CardText>
                <CardText>
                    где  <Majax.Node inline formula="τ" /> – время пребывания 
                    сбраживаемой массы в генераторе.
                </CardText>
                <CardText>
                    Выражение для тепловой мощности имеет вид
                </CardText>
                <CardText className="text-center">
                    <Majax.Node inline formula="N=ηQ_{н}^{р}V_{б}f_{м}" />, (6.23)
                </CardText>
                <CardText>
                    где  <Majax.Node inline formula="η" /> – КПД; 
                    <Majax.Node inline formula="\ Q_{н}^{р}" /> – теплота сгорания метана 
                    при нормальных условиях;
                    <Majax.Node inline formula="\ f_{м}" /> – cодержание метана.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Theory;