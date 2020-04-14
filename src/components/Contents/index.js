import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

const Contents = () => {
    return (
        <Container className="mt-3">
            <h3>Оглавление</h3>
            <ListGroup className="mt-3">
                <ListGroupItem tag="a" href="#" action>1 - Солнечная энергия</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>2 - Энергия ветра</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>3 - Гидроэнергия</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>4 - Энергия биомассы</ListGroupItem>
            </ListGroup>
        </Container>
    )
};

export default Contents;