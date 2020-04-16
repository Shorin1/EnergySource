import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Contents = () => {
    return (
        <Container className="mt-3">
            <h3>Оглавление</h3>
            <ListGroup className="mt-3">
                <NavLink to="/solar"><ListGroupItem tag="a" href="#" action>1 - Солнечная энергия</ListGroupItem></NavLink>
                <NavLink to="/air"><ListGroupItem tag="a" href="#" action>2 - Энергия ветра</ListGroupItem></NavLink>
                <NavLink to="/hydro"><ListGroupItem tag="a" href="#" action>3 - Гидроэнергия</ListGroupItem></NavLink>
                <NavLink to="/biomass"><ListGroupItem tag="a" href="#" action>4 - Энергия биомассы</ListGroupItem></NavLink>
                <NavLink to="/tasks"><ListGroupItem tag="a" href="#" action>Задачи</ListGroupItem></NavLink>
            </ListGroup>
        </Container>
    )
};

export default Contents;